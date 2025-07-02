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

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = ((good - bad)/all)
  const positive = (good / all)*100
  
  if (!all) {
    return <p> No feedback given </p>
  } else {
    return <div>
      <h1>Statistics</h1>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad} <br/>
      all {all} <br/>
      average {average } <br/>
      positive {positive} %
    </div>
  }
}

export default App