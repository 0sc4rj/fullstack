const Hello = ({name, age}) => {

  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>{props.totalText}{props.total}</p>
    </>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

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
    ],
    totalText: 'Number of exercises '
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises} part2={course.parts[1].name} exercise2={course.parts[1].exercises} part3={course.parts[2].name} exercise3={course.parts[2].exercises} />
      <Total totalText={course.totalText} total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
