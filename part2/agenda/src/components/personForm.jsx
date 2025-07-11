const PersonForm = ({newName, newNumber, actionName, actionNumber, submit}) => {
  return  <form onSubmit={submit}>
      <div>
        name: <input value={newName} onChange={actionName}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={actionNumber}/>
      </div>
      <div>
        <button type="submit" >add</button>
      </div>
    </form>
}

export default PersonForm