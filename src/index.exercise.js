import React from 'react';
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'

function App() {

  function onButtonClick(message) {
    alert(message)
  }
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => onButtonClick('login')} type="button">Login</button>
      </div>
      <div>
        <button onClick={() => onButtonClick('register')} type="button">Register</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))