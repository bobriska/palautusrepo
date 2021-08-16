import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Parts = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div> 
      <Parts part={props.part1.name} exercises={props.part1.exercises}/>
      <Parts part={props.part2.name} exercises={props.part2.exercises}/>
      <Parts part={props.part3.name} exercises={props.part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}


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
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App