import * as React from 'react';
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'

function App() {

  function onButtonClick(message) {
    alert(message)
  }
  return (
    <>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={() => onButtonClick('login')} type="button">Login</button>
      <button onClick={() => onButtonClick('register')} type="button">Register</button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))