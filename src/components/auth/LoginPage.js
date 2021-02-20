import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {

  const dispatch = useDispatch();

  const [{ email, password }, handleInputChange] = useForm({
    email: 'nando@gmail.com',
    password: '123456'
  })

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( login('12345',  'Javier') );
  }

  return (
    <div>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div
            className="google-btn"
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link
          to="/auth/register"
          className="link"
        >
          Create new account
        </Link>

      </form>
    </div>
  )
}