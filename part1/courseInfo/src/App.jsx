const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content info={ 
        {
          parts: [part1, part2, part3],
          exercises: [exercises1, exercises2, exercises3]
        }
        } />
      <Total total={{exercises1, exercises2, exercises3}} /> 
    </div>
  )
}

const Header = (data) => {  
  return <>
    <h1>{data.course}</h1>
  </>
}

const Content = (data) => {  
  const parts =  data.info.parts.map( (part, index) =>
    <p key={index}>
        {part} {data.info.exercises[index]}
    </p>
  )

  return <>{parts}</>
}

const Total = (data) => {  
  return <p>Number of exercises {data.total.exercises1 + data.total.exercises2 + data.total.exercises3}</p>
}

export default App