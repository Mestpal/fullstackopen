const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  return props.parts.map((part) => <Part key={part.id} part={part} />)
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p><b>Total of {props.total} exercises</b></p>

const Course = ({course}) => {  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  )
}

export default Course