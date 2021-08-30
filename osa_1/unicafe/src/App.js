import React, { useState } from 'react'

const feedback_text = 'Anna palautetta'
const statistics_text = 'Statistiikka'
const good_text = 'Hyvä'
const neutral_text = 'Neutraali'
const bad_text = 'Huono'
const all_text = 'Kaikki'
const avg_text = 'Keskiarvo'
const positives_text = 'Positiivisia'
const no_feedback_text = 'Ei annettua palautetta'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value} {props.unit} </td>
    </tr> 
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if(props.all_counter > 0) {
    return(
      <tbody>
        <StatisticLine text={good_text} value={props.good_counter}/>
        <StatisticLine text={neutral_text} value={props.neutral_counter}/>
        <StatisticLine text={bad_text} value={props.bad_counter}/>
        <StatisticLine text={all_text} value={props.all_counter}/>
        {/* two following default to 0 if NaN */}
        <StatisticLine text={avg_text} value={(props.all_sum / props.all_counter) || 0}/>
        <StatisticLine text={positives_text} unit='%' value={(props.good_counter / props.all_counter * 100) || 0}/>
      </tbody>
    )
  } else {
    return(
      <tbody><tr>
        <td>{no_feedback_text}</td>
      </tr></tbody>
    )
  }
}

const App = () => {
  const [ good_counter, set_good ] = useState(0)
  const [ neutral_counter, set_neutral ] = useState(0)  
  const [ bad_counter, set_bad ] = useState(0)
  const [ all_sum, set_sum ] = useState(0)
  const [ all_counter, set_all ] = useState(0)

  const handle_good = () => {
    set_good(good_counter + 1)
    set_all(all_counter + 1)
    set_sum(all_sum + 1)
  }

  const handle_neutral = () => {
    set_neutral(neutral_counter + 1)
    set_all(all_counter + 1)
    set_sum(all_sum + 0)
  }

  const handle_bad = () => {
    set_bad(bad_counter + 1)
    set_all(all_counter + 1)
    set_sum(all_sum - 1)
  }



  return (
    <div>
      <h1>{feedback_text}</h1>
 
      <p>
        <Button
          handleClick={handle_good}
          text={good_text}
        />
        <Button
          handleClick={handle_neutral}
          text={neutral_text}
        />     
        <Button
          handleClick={handle_bad}
          text={bad_text}
        />          
      </p>
      
      <h1> {statistics_text} </h1>
      <table>
        <Statistics good_counter={good_counter}
                    neutral_counter={neutral_counter}
                    bad_counter={bad_counter}
                    all_counter={all_counter}
                    all_sum={all_sum}/>
      </table>
    </div>

  )
}

export default App