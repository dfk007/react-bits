// useState React hook to manage a counter state.

function Button() {
  // a,b = useState()
  // counter, setCounter = useState()
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode')
)
