import React from 'react';
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'

// show reach dialog boxes
import { Dialog } from "@reach/dialog";
import '@reach/dialog/styles.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false)

  function toggleIsLoginOpen() {
    setIsLoginOpen(prevState => !prevState)
  }

  function toggleIsRegistrationOpen() {
    setIsRegistrationOpen(prevState => !prevState)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={toggleIsLoginOpen} type="button">Login</button>
      </div>
      <div>
        <button onClick={toggleIsRegistrationOpen} type="button">Register</button>
      </div>
      <Dialog aria-label={"register"} isOpen={isRegistrationOpen} onDismiss={toggleIsLoginOpen}>
        <p>Register</p>
      </Dialog>
      <Dialog aria-label={"login"} isOpen={isLoginOpen} onDismiss={toggleIsRegistrationOpen}>
        <p>Login</p>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))