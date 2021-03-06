import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  //only show if there are votes, that is all is not 0
  if (props.votes.reduce((a, b) => a + b, 0) > 0) {
    //this gets the index of largest value in array
    let most_voted = props.votes.indexOf(Math.max.apply(Math, props.votes))
    return (
      <div>
        <h1> Anecdote with most votes </h1>
        <p>
          {props.anecdotes[most_voted]}
        </p>
      </div>
    ) } else {
      return (
        <div></div>
      )
    }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const handle_next = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  const handle_vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <h1> Anecdote of the day </h1>
      <p>{anecdotes[selected]}</p>
        <Button handleClick={handle_vote}
          text='vote'/>
        <Button handleClick={handle_next}
          text='next anecdote'/>

      <Display anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App
