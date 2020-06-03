const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms  :data'))

morgan.token('data', function (req, res) { return JSON.stringify(req.body) })

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)

})

app.get('/api/info', (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`
    )
})

app.get('/api/persons/:id', (reg, res) => {
  const id = Number(reg.params.id)
  const person = persons.find(person => person.id === id)
  if (person){
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (reg, res) =>{
  const id = Number(reg.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

const generateId = () => {
  let newId = Math.floor(Math.random()*Math.floor(10000))
  while (persons.find(person => person.id === newId)){
    newId = Math.floor(Math.random()*Math.floor(10000))
  }
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name) {
    return response.status(400).json({error: 'name is missing'})
  } else if (!body.number) {
    return response.status(400).json({error: 'number is missing'})
  } else if (persons.find(person => person.name === body.name)){
    return response.status(400).json({error: 'name is already in use'})
  } else {
    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
    persons = persons.concat(person)
    response.json(person)
  }
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})