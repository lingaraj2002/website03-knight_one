import React, { Component } from 'react'
import './About.css'
import About1 from './about_1.png'
import About2 from './about_2.png'

export class About extends Component {
  render() {
    return (
      <div>
            <div className='component-2'>
                <div className='about-container'>
                    <div className='about-row'>
                        <div className='about-col-1'>
                            <div className='about-con-1'>
                                <h1>about us</h1>
                                <h3>Explore All Corners of The World With Us</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                            <div className='about-con-2'>
                                <a href=''>read more</a>
                            </div>
                        </div>
                        <div className='about-col-2'>
                          <div className='about-img-1'>
                                <img src={About1}/>
                            </div>
                            <div className='about-img-2'>
                                <img src={About2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default About
