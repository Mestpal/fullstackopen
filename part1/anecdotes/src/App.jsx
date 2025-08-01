import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([...Array(anecdotes.length)].map(()=> 0))
  const [maxPosition, setMaxPosition] = useState(0)


  function updateSelected() {
    const nextSelected = getRandomInt(anecdotes.length)
    setSelected(nextSelected)
  }

  function updateVotes() {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    const maxVotes =  Math.max(...newVotes)
    setMaxPosition(newVotes.indexOf(maxVotes))
  }

  return <>
    <h1>{anecdotes[selected]} </h1>
    <h3> has {votes[selected]} votes</h3>
    <Button text="vote" action={updateVotes}/>
    <Button text="next anecdote" action={updateSelected}/>
    <h1> Anecdote with most votes</h1>
    {anecdotes[maxPosition]}
  </>
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = ({action, text}) => {
  return  <button onClick={() => action()}>
    {text}
  </button>
}

export default App