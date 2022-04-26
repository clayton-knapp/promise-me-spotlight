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
  // const handleClick = (callback) => {
  //   const result = callback();
  //   console.log(result);
  // };

  return (
    <>
      <button onClick={async () => console.log(await asyncGetQuotes())}>
        async get quotes
      </button>

      <button onClick={async () => console.log(await thenGetQuotes())}>
        then get quotes
      </button>

      <button onClick={async () => console.log(await asyncTryGetQuotes())}>
        async try get quotes
      </button>

      <button onClick={async () => console.log(await thenTryGetQuotes())}>
        then try get quotes
      </button>

      <button onClick={async () => console.log(await asyncFinallyGetQuotes())}>
        async finally get quotes
      </button>

      <button onClick={async () => console.log(await thenFinallyGetQuotes())}>
        then finally get quotes
      </button>

      <button onClick={async () => console.log(await thenAsyncGetQuotes())}>
        then async get quotes
      </button>

      <button onClick={async () => console.log(await asyncThenGetQuotes())}>
        async then get quotes
      </button>
    </>
  );
}
