import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const sumall = good + neutral + bad
  if (sumall === 0) return(
        <p>No feedback given</p>
      )
  else {
    const average = (good*1 + neutral*0 + bad*(-1))/sumall
    return(
      <table>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={sumall}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={good / sumall}/>
      </table>
    ) 
  }
}

const StatisticLine = ({text, value}) => {
  return(
    <tr><td>{text}</td> <td>{value}</td></tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handeNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handeNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App