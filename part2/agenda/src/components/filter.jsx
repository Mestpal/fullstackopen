const Filter = ({filter, action}) =>{
    return  <div>
        filter shown with <input value={filter} onChange={action}/>
    </div>
  }

export default Filter