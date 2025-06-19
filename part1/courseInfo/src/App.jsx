const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content info={parts} />
      <Total total={parts} /> 
    </div>
  )
}

const Header = (data) => {  
  return <>
    <h1>{data.course}</h1>
  </>
}

const Content = ({info}) => {  
  const ContentComponent = info.map((entry, index) =>
    <Part key={index} part={entry.name} exercises={entry.exercises}/>
  )

  return <div>{ContentComponent}</div>
}

const Total = ({total}) => {
  const sum = total
    .reduce((amount, step) => amount += step.exercises, 0)
  return <p>Number of exercises {sum}</p>
}

const Part = ({part, exercises}) => {
  return <p>
    {part} {exercises}
   </p>
}

export default App