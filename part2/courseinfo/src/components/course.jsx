const Header = (props) => <h2>{props.course}</h2>

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
  const total = course.parts.reduce((result, part) => result += part.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default Course