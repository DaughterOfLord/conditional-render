/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    /* let authBUtton
    if (isLoggedIn === true) {
      authBUtton = <button>Logout</button>
    } else {
      authBUtton = <button>Login</button>
    } */
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>LogIn</button>}
      </div>
    )
  }
}

export default App
