import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Profile.css'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='profile clearfix'>
        <ul className='profile-ul'>
          <li className='left balances-txt'>
            <img src={require('./heading_face.png')} />
          </li>
          <li className='right'>
            <img src={require('./flip-blue.png')} />
          </li>
        </ul>
        <div className='row graph'>
          <img src={require('./graph.png')} />
        </div>
        <button class='btn warning'>
          MANAGE GOALS
        </button>
      </div>
    )
  }
}

export default Profile
