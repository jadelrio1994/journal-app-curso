import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator'

import { startRegisterEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm'

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { msgError } = useSelector(state => state.ui);

  const [{ name, email, password, password2 }, handleInputChange] = useForm({
    name: 'Javier',
    email: 'jadelrio123456@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterEmailPassword(email, password, name));
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is require'))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Password should be at least 6 character and match each other'))
      return false
    }
    dispatch(removeError())
    return true
  }

  return (
    <div>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>

        {
          msgError && (<div className="auth__alert-error">{msgError}</div>)     
        }

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>

        <Link
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>

      </form>
    </div>
  )
}
