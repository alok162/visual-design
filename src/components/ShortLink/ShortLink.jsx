import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './ShortLink.css'

class ShortLink extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='ShortLink'>
        <div className='parent'>
          <div className='child1 content'>
            Funds Transfer
          </div>
          <div className='child2 content'>
            Pay Bills
          </div>
        </div>
        <div className='parent clearfix'>
          <div className='child1 content'>
            Funds Transfer
          </div>
          <div className='child2 content'>
            Pay Bills
          </div>
        </div>
        <div className='parent clearfix'>
          <div className='child1 content'>
            Funds Transfer
          </div>
          <div className='child2 content'>
            Pay Bills
          </div>
        </div>
      </div>
    )
  }
}

export default ShortLink
