import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'
import { Dialog } from '@reach/dialog'

function App() {
  const [openModalStatus, setModalStatus] = React.useState('none')

  function closeModal() {
    setModalStatus('none')
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setModalStatus('login')} type="button">
          Login
        </button>
      </div>
      <div>
        <button onClick={() => setModalStatus('register')} type="button">
          Register
        </button>
      </div>
      <Dialog
        aria-label={'Register form'}
        isOpen={openModalStatus === 'register'}
        onDismiss={closeModal}
      >
        <div>
          <button onClick={closeModal}>Close</button>
        </div>
        <p>Register</p>
      </Dialog>
      <Dialog
        aria-label={'Login form'}
        isOpen={openModalStatus === 'login'}
        onDismiss={closeModal}
      >
        <div>
          <button onClick={closeModal}>Close</button>
        </div>
        <p>Login</p>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
