import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Header2.css'

class Header2 extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <header className='header2-body'>
        <div className='header2'>
          <div className='header2-left'>
            <div className='header2-left-content'>
              <div className='header2-left-child profile-pic'>
                {' '}
                <img
                  className='profile-pic'
                  src={require('./profilepic.png')}
                />
              </div>
              <div className='header2-left-child user'>
                Welcome <b>Emily Watson</b><br />
                <span>Last login: </span>10:32 AM, 28th Aug 2018
              </div>
              <div className='header2-left-child signout'>
                <div className='logout'>
                  <div className='logout-child'>
                    <img src={require('./icon-logout.png')} />
                  </div>
                  <div className='logout-child'>
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='header2-right'>
            <div className='header2-right-child'>
              <span>In case of Emergency &nbsp;</span>
            </div>
            <div className='header2-right-child'>
              <img src={require('./icon-arrow-down.png')} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header2
