import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './toolkitRedux/toolkitReducer';
import './styles/App.css'
import MyButton from './components/UI/button/MyButton'

function App() {
  const count = useSelector(state => state.toolkit.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="app-body">
        <h1>Counter {count}</h1>
        <div className='buttons'>
          <MyButton onClick={() => dispatch(increment())}>Increment</MyButton>
          <MyButton onClick={() => dispatch(decrement())}>Decrement</MyButton>
        </div>
      </div>
    </div>
  );
}

export default App;
