import React, { Component } from 'react'
import './Serve.css'
import serve1 from './serve-1.png'
import serve2 from './serve-2.png'
import serve3 from './serve-3.png'

export class Service extends Component {
  render() {
    return (
      <div>
            <div className='conponent-3'>
                <div className='serve-container'>
                    <div className='serve-row-1'>
                        <div className='serve-col-1'>
                            <h1>WHAT WE SERVE</h1>
                            <h3>We Provide Top Destinations</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div className='serve-row-2'>
                        <div className='serve-col-2'>
                            <div className='serve-img'>
                                <img src={serve1}/>
                                <div className='serve-con'>
                              <p>$ 490</p>
                            </div>
                            </div>
                            <div className='serve-content'>
                                <h2>Enjoy the beauty of Maldives</h2>
                                <p>maldivies ,pepublic maldivies</p>
                            </div> 
                        </div>
                        <div className='serve-col-2'>
                        <div className='serve-img'>
                                <img src={serve2}/>
                                <div className='serve-con'>
                              <p>$ 490</p>
                            </div>
                            </div>
                            <div className='serve-content'>
                                <h2>Enjoy the beauty of Maldives</h2>
                                <p>maldivies ,pepublic maldivies</p>
                            </div>   
                        </div>
                        <div className='serve-col-2'>
                        <div className='serve-img'>
                                <img src={serve3}/>
                                <div className='serve-con'>
                              <p>$ 490</p>
                            </div>
                            </div>
                            <div className='serve-content'>
                                <h2>Enjoy the beauty of Maldives</h2>
                                <p>maldivies ,pepublic maldivies</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Service
