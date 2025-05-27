import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div>
            <div className='components-6'>
                <div className='footer-container'>
                    <div className='footer-head'>
                        <div className='footer-col-1'>
                            <h2>Begin your adventurous journey here.</h2>
                        </div>
                        <div className='footer-col-2'>
                            <a href='#'>get started</a>
                        </div>
                    </div>
                    <div className='footer-row'>
                        <div className='footer-con-1'>
                            <div className='footer-content-1'>
                                <h3>about passport</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            
                            <div className='footer-content-2'>
                                 <h3>connect</h3>
                                <div className='footer-icon-row'>
                                    <div className='footer-icon'>
                                        <iconify-icon icon="mdi:instagram"></iconify-icon>
                                    </div>
                                    <div className='footer-icon'>
                                        <iconify-icon icon="mdi:twitter"></iconify-icon>
                                    </div>
                                    <div className='footer-icon'>
                                        <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                                    </div>
                                    <div className='footer-icon'>
                                        <iconify-icon icon="ri:linkedin-fill"></iconify-icon>
                                    </div>
                                    <div className='footer-icon'>
                                        <iconify-icon icon="ri:pinterest-line"></iconify-icon>  
                                    </div>
                                    <div className='footer-icon'>
                                        <iconify-icon icon="icon-park-outline:dribble"></iconify-icon>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div className='footer-con-2'>
                            <h3>links</h3>
                            <ul className='footer-ul'>
                                <li><a href='#'>about us</a></li>
                                <li><a href='#'>services</a></li>
                                <li><a href='#'>career</a></li>
                                <li><a href='#'>news</a></li>
                                <li><a href='#'>contact</a></li>
                            </ul>
                        </div>
                        <div className='footer-con-3'>
                            <h3>company</h3>
                            <ul className='footer-ul'>
                            <li><a href='#'>about us</a></li>
                                <li><a href='#'>services</a></li>
                                <li><a href='#'>career</a></li>
                                <li><a href='#'>news</a></li>
                                <li><a href='#'>contact</a></li>
                            </ul>
                        </div>
                        <div className='footer-con-4'>
                            <h3>contact</h3>
                            <ul className='footer-ul'>
                                <li><p>43 Raymouth Rd. Baltemoer, London 3910</p></li>
                                <li><p>+1(123)-456-7890</p></li>
                                <li><p>+1(123)-456-7890</p></li>
                                <li><p>info@mydomain.com</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Footer
