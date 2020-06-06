require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms  :data'))

morgan.token('data', function (req) { return JSON.stringify(req.body) })

app.get('/api/persons', (request, response, next) => {
  Person.find({})
    .then(persons => {
      response.json(persons)
    })
    .catch(error => next(error))
})

app.get('/api/info', async (request, response, next) => {
  let persons = await Person.find({})
    .catch(error => next(error))
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`
  )
})

app.get('/api/persons/:id', (reg, res, next) => {
  Person.findById(reg.params.id)
    .then(person => {
      if(person) {
        res.json(person)
      } else {
        reg.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', async (reg, res, next) => {
  Person.findByIdAndRemove(reg.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  const sPerson = new Person({
    name: body.name,
    number: body.number,
  })
  console.log(sPerson)
  sPerson.save()
    .then(savedPerson => {
      return savedPerson.toJSON()
    })
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})