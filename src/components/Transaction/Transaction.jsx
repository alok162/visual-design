import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Transaction.css'

class Transaction extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='transaction'>
        <ul className='transaction-ul-1'>
          <li className='txt balances-txt'>
            RECENT TRANSACTIONS
          </li>
          <li className='img'>
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
          </li>
        </ul>
        <div className='transaction-ul-2'>
          <ul className='clearfix'>
            <li className='click-li trnx-txt-date'>
              <div className='trnx-ul-2-data'>
                <img src={require('./icon-minus.png')} />
              </div>
              <div className='trnx-ul-2-data'>
                <div>28 july'18</div>
                <div><span>2,000.00</span></div>
              </div>
            </li>
            <li className='click-li trnx-txt-date'>
              <div className='trnx-ul-2-data'>
                <img src={require('./icon-plus.png')} />
              </div>
              <div className='trnx-ul-2-data'>
                <div>28 july'18</div>
                <div><span>2,000.00</span></div>
              </div>
            </li>
            <li className='click-li trnx-txt-date'>
              <div className='trnx-ul-2-data'>
                <img src={require('./icon-minus.png')} />
              </div>
              <div className='trnx-ul-2-data'>
                <div>28 july'18</div>
                <div><span>2,000.00</span></div>
              </div>
            </li>
          </ul>
        </div>
        <div className='ham-opt clearfix'>
          <div className='hamlist bottom-data'>
            <img src={require('./icon-morebtn.png')} />
          </div>
          <div className='option bottom-data'>Show More</div>
        </div>
      </div>
    )
  }
}

export default Transaction
