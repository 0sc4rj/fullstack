import { useState } from 'react'

const Title = (props) => (<h2>{props.text}</h2>)
const Anecdote = (props) => (<p>{props.anecdote}</p>)
const Button = (props) => (<button onClick={props.handleClick}>{props.text}</button>)
const VoteNumber = (props) => (<p>Has <strong>{props.numberVote}</strong> votes</p>)

const App = () => {
  
  const [selected, setSelected] = useState(0) 
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const randomAnecdote = (min, max) => {
    let viewAnecdote = selected;
    while (viewAnecdote === selected) {
      viewAnecdote = Math.floor(Math.random() * (max - min + 1) + min)
    }
    return viewAnecdote
  }

  const getBestAnecdote = () => votes.indexOf(Math.max(...votes))

  const bestAnecdote = getBestAnecdote() 

  return (
    <>
      <Title text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <VoteNumber numberVote={votes[selected]} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={() => setSelected(randomAnecdote(0, 5))} text="Next Anecdote" />
      <Title text="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[bestAnecdote]} />
      <VoteNumber numberVote={votes[bestAnecdote]} />
    </>
  );

}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export default App;