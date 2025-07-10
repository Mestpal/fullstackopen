import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const onChangeName = (event) => setNewName(event.target.value)
  const onSubmitForm = (event) => {
  event.preventDefault()
  const newPerson = {
    name: newName
  }
  setPersons(persons.concat(newPerson))
  console.log('new persons', newPerson)
  setNewName("")
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmitForm}>
        <div>
          name: <input value={newName} onChange={onChangeName}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}><b>{person.name}</b><br/></div> )}
    </div>
  )
}

export default App