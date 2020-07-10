import React from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignOutAction } from '../../../actions/AccountActions'

const Layout = ({ children, SignOutAction , account }) => {

  if (!account)
    return <Redirect to='/' />

  const signOutHandler = (e) => {
    e.preventDefault()

    SignOutAction()
  }

  return (
    <div className='layout'>
      <nav className='navbar navbar-expand-lg bg-primary text-light'>
        <div className='container d-flex w-100 justify-content-between'>
          <div>
            <NavLink to='/manage/links'>BACK</NavLink>
          </div>
          <div className='text-center'>
            <strong>Links</strong>
          </div>
          <div>
            <button onClick={signOutHandler} className='btn btn-clear'>Exit</button>
          </div>
        </div>
      </nav>
      <div className='container'>{ children }</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { account: state.account.account }
}

export default connect(mapStateToProps, { SignOutAction })(Layout)