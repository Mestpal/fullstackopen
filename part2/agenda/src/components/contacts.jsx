const Contacs = ({ contacts, action }) => {    
  return contacts.map((person) => 
    <div key={person.name}>
      <b>{person.name}</b> {person.number}
      <button onClick={ () => action(person) }> Delete </button>
      <br/>
    </div>
  )
}

export default Contacs