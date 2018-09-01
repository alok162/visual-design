import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Upcoming.css'

class Upcoming extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='upcoming'>
        <ul className='upcoming-ul clearfix'>
          <li className='txt-align balances-txt'>
            UPCOMING
          </li>
          <li className='img-align'>
            <img src={require('./icon-calendar.png')} />
          </li>
        </ul>
        <div className='row water-bill'>
          Water Bill &nbsp; <span> DS Waters</span>
        </div>
        <div className='row blnc-text'>
          Due on &nbsp; <span>19 Aug'14</span>
        </div>
        <div className='row amnt-text'>
          Rs. 375.00
        </div>
        <button class='btn warning'>PAY NOW</button>
      </div>
    )
  }
}

export default Upcoming
