rewuire('dotenv').config()
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const url =process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length>4){
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })
  person.save().then(response => {
    console.log('Person saved!')
    mongoose.connection.close()
  })
}

Person.find({}).then(result => {
  console.log("phonebook:")
  result.forEach(person => {
    console.log(person.name, person.number)
  })
  mongoose.connection.close()
})
