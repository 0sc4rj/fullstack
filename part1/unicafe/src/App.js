import { useState } from "react";

const AppTitle = props => (<h1>{props.title}</h1>)
const StatisticTitle = props => (<p>{props.text}</p>)
const Button = props => (<button onClick={props.handleClick}>{props.text}</button>)
const StatisticLine = props => (<table><tbody><tr><td>{props.name}</td><td>{props.number}</td></tr></tbody></table>)



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const allComments = good + neutral + bad
  const average = good - bad / allComments
  const positivePercentage = good / allComments * 100

  return (
    <>
      <AppTitle title="Give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <StatisticTitle text="Statistics" />
      {allComments === 0 ? (<p>No feedback given</p>) : (<>
      <StatisticLine name="Good" number={good} />
      <StatisticLine name="Neutral" number={neutral} />
      <StatisticLine name="Bad" number={bad} />
      <StatisticLine name="Alls" number={allComments} />
      <StatisticLine name="Average" number={average} />
      <StatisticLine name="Positive" number={positivePercentage + "%"} />
      </>)}
    </>
  );
}

export default App;
