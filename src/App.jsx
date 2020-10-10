import React, { useState } from 'react';

const App = () => {
  // const state = useState ();
  const [count, setCount] = useState (0);

  const IncNumb = () => {
      setCount(count +1);
    };

    return (
      <>
        <div>
          <h1 className='show'> {count} </h1>
          <button onClick= {IncNumb}> Click!!! </button>
        </div>
      </>
    );
}

export default App;