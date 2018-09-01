import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Header1.css'

class Header1 extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <header className='header1-body'>
        <div className='header1'>
          <div className='header1-col-left'>
            <ul className='header1-left-ul'>
              <li>
                <img src={require('./icon-hamburger.png')} />
              </li>

              <li className='header1-left'>
                <img
                  className='img-response'
                  src={require('./bg-sitemap.png')}
                />
              </li>
            </ul>
          </div>
          <div className='header1-col-right'>
            <ul className='header1-right-ul'>
              <li className='header1-right'>
                <img src={require('./icon-customercare.png')} />
              </li>
              <li className='header1-right'>
                <img
                  className='header1-right'
                  src={require('./icon-alert.png')}
                />
              </li>
              <li className='header1-right'>
                <img src={require('./icon-mail.png')} />
              </li>
            </ul>
          </div>

          {/* <ul className='header1-left-ul' style={{}}>
                <li style={{ float: 'left', padding: '18px 0' }}>
                  <img src={require('./icon-hamburger.png')} />
                </li>

                <li
                  className='header1-left'
                  style={{ float: 'left', marginLeft: '10px' }}
                >
                  <img
                    className='img-response'
                    src={require('./bg-sitemap.png')}
                  />
                </li>
              </ul> */}
          {/* <ul className='header1-right-ul' style={{ float: 'right' }}>
                <li className='header1-right' style={{ float: 'right' }}>
                  <img src={require('./icon-customercare.png')} />
                </li>
                <li className='header1-right' style={{ float: 'right' }}>
                  <img
                    className='header1-right'
                    src={require('./icon-alert.png')}
                  />
                </li>
                <li className='header1-right' style={{ float: 'right' }}>
                  <img src={require('./icon-mail.png')} />
                </li>
              </ul> */}
        </div>
      </header>
    )
  }
}

export default Header1
