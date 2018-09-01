import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Balances.css'

class Balances extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <div className='balances-top'>
          <ul className='balance-header'>
            <li className='content-left balances-txt'>
              BALANCES
            </li>
            <li className='content-right'>
              <span style={{ color: 'orange' }}>Recent</span>
            </li>
          </ul>
          <div style={{ marginTop: '10px' }} className='drop-date'>
            <div className='drop-date-dropdown'>
              <div class='dropdown'>
                <button
                  class='btn btn-primary dropdown-toggle'
                  type='button'
                  data-toggle='dropdown'
                >
                  XXXX-2456-Checking
                  <span class='caret' />
                </button>
                <ul class='dropdown-menu'>
                  <li><a href='#'>HTML</a></li>
                  <li><a href='#'>CSS</a></li>
                  <li><a href='#'>JavaScript</a></li>
                </ul>
              </div>
            </div>
            <div className='drop-date-date blnc-text'>
              As on 10 Aug'14
            </div>
          </div>
          <div className='row blnc-text'>
            Available Balances
          </div>
          <div className='row amnt-text'>
            Rs. 5,399.00
          </div>
        </div>
        <ul className='balances-ul-bottom'>
          <li className=''>ACCOUNTS</li>
          <li className='blnc-text'>LOANS</li>
          <li className='blnc-text'>CARDS</li>
          <li className='blnc-text'>INVESTMENTS</li>
        </ul>
      </div>
    )
  }
}

export default Balances
