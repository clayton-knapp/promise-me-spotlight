import {
  asyncGetQuotes,
  thenGetQuotes,
  asyncTryGetQuotes,
  thenTryGetQuotes,
  asyncFinallyGetQuotes,
  thenFinallyGetQuotes,
  thenAsyncGetQuotes,
  asyncThenGetQuotes,
} from './services/promise-me';

export default function App() {
  //handle click is a higher order function - takes a function as an argument - a callback - in this case async get quotes
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };

  return (
    <>
      <button onClick={asyncGetQuotes}>async get quotes</button>
      <button onClick={thenGetQuotes}>then get quotes</button>
      <button onClick={asyncTryGetQuotes}>async try get quotes</button>
      <button onClick={thenTryGetQuotes}>then try get quotes</button>
      <button onClick={asyncFinallyGetQuotes}>async finally get quotes</button>
      <button onClick={thenFinallyGetQuotes}>then finally get quotes</button>
      <button onClick={thenAsyncGetQuotes}>then async get quotes</button>
      <button onClick={asyncThenGetQuotes}>async then get quotes</button>
    </>
  );
}
