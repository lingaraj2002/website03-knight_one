import React, { Component } from 'react'
import './Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import person1 from './person-1.png'

export class Testimonials extends Component {
  render() {
    return (
      <div>
          <div className='components-4'>
            <div className='testimonials-container'>
                <div className='testimonials-row'>
                    <div className='testimonials-col-1'>
                        <div className='testimonials-con-1'>
                            <h1>happy customer</h1>
                            <h3>testimonials</h3>
                        </div>
                        <div className='testimonials-con-2'>
                            <div className='testimonials-img'>
                                <img src={person1}/>
                            </div>
                            <h2>james woodland</h2>
                            <p>designer at facebook</p>
                        </div>
                        <div className='testimonials-con-3'>  
                            <i><FontAwesomeIcon icon={faQuoteLeft} /></i>                         
                            <p>“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”</p>
                        </div>
                    </div>
                    <div className='testimonials-col-2'>
                        <div className='testimonials-content'>
                            <h1>faq</h1>
                            <h3>frequently asked questions</h3>
                        </div>
                        <div className='testimonials-con-4'>
                            <div className='testimonials-icon'>
                            <i><FontAwesomeIcon icon={faPlus} /></i> 
                            </div>
                            <div className='testimonials-p'>
                                <p>how to download and refer?</p>
                            </div>
                        </div>
                        <div className='testimonials-con-4'>
                            <div className='testimonials-icon'>
                            <i><FontAwesomeIcon icon={faPlus} /></i> 
                            </div>
                            <div className='testimonials-p'>
                                <p>how to create your paypal account?</p>
                            </div>
                        </div>
                        <div className='testimonials-con-4'>
                            <div className='testimonials-icon'>
                            <i><FontAwesomeIcon icon={faPlus} /></i> 
                            </div>
                            <div className='testimonials-p'>
                                <p>how to link your paypal to bank account?</p>
                            </div>
                        </div>
                        <div className='testimonials-con-4'>
                            <div className='testimonials-icon'>
                            <i><FontAwesomeIcon icon={faPlus} /></i> 
                            </div>
                            <div className='testimonials-p'>
                                <p>we are better then others?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Testimonials
