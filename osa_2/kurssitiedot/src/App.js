import React from 'react'
import Course from './components/Course'



const App = () => {
  const courses = 
    [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Hooks in action',
            exercises: 16,
            id: 4
          }
        ]
      },
      {
        name: 'Java application development',
        id: 2,
        parts: [
          {
            name: 'Fundamentals of Java',
            exercises: 2,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 3,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 4,
            id: 3
          },
          {
            name: 'Functions in action',
            exercises: 16,
            id: 4
          }
        ]
      },
      {
        name: 'Node.js',
        id: 3,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
  ]
  

  return (
    <div>
      <h1>Webb development curriculum</h1>
      {courses.map(kurssi => <Course key={kurssi.id} course={kurssi}/> )}
    </div>
  )
}

export default App