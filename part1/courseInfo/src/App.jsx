const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content info={{ part1, part2, part3}} />
      <Total total={{ part1, part2, part3}} /> 
    </div>
  )
}

const Header = (data) => {  
  return <>
    <h1>{data.course}</h1>
  </>
}

const Content = ({info}) => {  
  const ContentComponent =  Object.keys(info).map( (entry, index) =>
    <Part key={index} part={info[entry].name} exercises={info[entry].exercises}/>
  )

  return <div>{ContentComponent}</div>
}

const Total = ({total}) => {
  const sum = Object.keys(total)
    .reduce((amount, step) => amount += total[step].exercises, 0)
  return <p>Number of exercises {sum}</p>
}

const Part = ({part, exercises}) => {
  return <p>
    {part} {exercises}
   </p>
}

export default App