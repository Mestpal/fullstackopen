const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content info={course.parts} />
      <Total total={course.parts} /> 
    </div>
  )
}

const Header = ({course}) => {  
  return <>
    <h1>{course}</h1>
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