import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './useForm';
import {Hello} from './Hello'
import { useFetch } from './useFetch';

const App = () => {
  const [values, handleChange] = useForm({
    firstName: "",
    email: "",
    password: ""
  })

  const [count, setCount] = useState(0)
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

  return (
    <div>
      <div>{ !data ? '...Loading' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* {<button onClick={() => setShowHello(!showHello)}>Toggle</button>} */}
      {/* {showHello && <Hello />} */}
      <input 
        name="firstName" 
        placeholder="Name"
        value={values.firstName} 
        onChange={handleChange} 
        />
      <input 
        name="email" 
        placeholder="Email"
        value={values.email} 
        onChange={handleChange} 
        />
      <input 
        type="password" 
        name="password" 
        placeholder="password"
        value={values.password} 
        onChange={handleChange} 
        />
    </div>
  );
}

export default App;
