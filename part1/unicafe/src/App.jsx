import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <FeedbackPanel/>
      <div>
        <ButtonGrade text="good" action={setGood} value={good}/>
        <ButtonGrade text="neutral" action={setNeutral} value={neutral}/>
        <ButtonGrade text="bad" action={setBad} value={bad}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const FeedbackPanel = () => <>
  <h1> Give Feedback </h1>
</>

const ButtonGrade = ({text, value, action}) => 
  <button onClick={() => action(value + 1)}> 
    {text}
  </button>

const Statistics = ({good, neutral, bad}) => 
  <div>
    <h1>Statistics</h1>
    good {good}<br/>
    neutral {neutral}<br/>
    bad {bad}
  </div>

export default App