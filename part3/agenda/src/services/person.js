import axios from "axios";

const baseUrl = 'api/persons'
function getAll() {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

function create(person) {
  const request = axios.post(baseUrl, person)
  return request.then(response => response.data)
}

function deletePerson(id) {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

function updatePerson(person) {
  const request = axios.put(`${baseUrl}/${person.id}`, person)
  return request.then(response => response.data)
}

export default { getAll, create, deletePerson, updatePerson}