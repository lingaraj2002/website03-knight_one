import React, { Component } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

export class Header extends Component {
  render() {
    return (
      <div>
        <div className='component'>
            <div className='container'>
                <div className='row1'>
                    <div className='col1'>
                        <h1>passport</h1>
                    </div>
                    <div className='col2'>
                        <ul>
                            <li>home</li>
                            <li>about</li>
                            <li>dropdown</li>
                            <li>services</li>
                            <li>blog</li>
                        </ul>
                    </div>
                    <div className='col3'>
                          <a href='#'>contact us</a>
                    </div>
                    <div className='nav-col-4'>
                        <i><iconify-icon icon="icon-park:hamburger-button"></iconify-icon></i>
                    </div>
                </div>
                <div className='row2'>
                    <div className='col-4'>
                        <p>It is Better to</p>
                        <p>Travel Well</p> 
                        <p>Than to Arrive</p>
                    </div>
                    <div className='col-5'>
                        <div className='icon'>
                            <i><FontAwesomeIcon icon={faPlay} /></i>
                        </div>
                        <div className='icon-con'>
                             <p>watch video</p>  
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='loc-icon'>
                        <i><FontAwesomeIcon icon={faLocation} /></i>
                        </div>
                        <div className='loc-con'>
                            <p>Vernazza, Italy — $500.00 / night</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header