import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Header1 from '../Header1/Header1'
import Header2 from '../Header2/Header2'
import Body from '../Body/Body'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Header1 />
        <Header2 />
        <Body />
      </div>
    )
  }
}

export default Home
