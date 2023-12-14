import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Title from './components/Title';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Persons';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleName = event => setNewName(event.target.value);
  const handleNumber = event => setNewNumber(event.target.value)
  const handleSearch = event => setSearchName(event.target.value)
  const addPerson = event => {
    event.preventDefault();

    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const newPersonObject = {
      name: newName,
      number: newNumber,
    }
    setPersons([...persons, newPersonObject]);
    setNewName('');
    setNewNumber('');
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <>
      <h1>Phonebook</h1>

      <Filter searchName={searchName} handleSearch={handleSearch} />

      <Title text="Add a new" />

      <PersonForm  addPerson={addPerson} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber ={handleNumber}/>
      
      <Title text="Numbers" />

      {
        namesToShow.map(listName => <Person key={listName.name} name={listName.name} number={listName.number} />)
      }
    </>
  )
}

export default App;