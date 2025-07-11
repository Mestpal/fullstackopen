const Contacs = ({contacts}) => {    
  return contacts.map((person) => <div key={person.name}><b>{person.name}</b> {person.number}<br/></div>)
}

export default Contacs