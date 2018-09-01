import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Balances from '../Balances/Balances'
import Upcoming from '../Upcoming/Upcoming'
import Profile from '../Profile/Profile'
import Transaction from '../Transaction/Transaction'
import ShortLink from '../ShortLink/ShortLink'
import './Body.css'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='bd-img'>
        <div className='main-body'>
          <div className='row'>
            <div className='col-lg-9 col-xl-9 col-md-12 body-top'>
              {/* Balance and upcoming component  */}
              <div className='balances-upcoming'>
                <div className='balances'>
                  <Balances />
                </div>
                <div className='upcoming-body'>
                  <Upcoming />
                </div>
              </div>
              {/* Profile and Transaction component */}
              <div className='profile-transaction'>
                <div className='profile-body'>
                  <Profile />
                </div>
                <div className='transaction-body'>
                  <Transaction />
                </div>
              </div>
              {/* advertisement component calling */}
              <div className='row advertisement'>
                <div className='advertisement-img'>
                  <img src={require('./placeholder.png')} />
                </div>
              </div>
            </div>
            <aside className='col-lg-3 col-xl-3 col-md-0 ShortLink-body'>
              <ShortLink />
            </aside>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
