import React, { Component } from 'react'
import './Blog.css'
import blog1 from './blog-1.png'
import blog2 from './blog-2.png'
import blog3 from './blog-3.png'
import blog4 from './blog-4.png'


    let  person = [
                    {   img:blog1,
                        blogp1:"may 14,2020",
                        blogh3:"far far away behind the word mountains",
                        blogp2:"Vokalia and Consonantia, there live the blind texts. Separated they live.",
                        bloga:"read more",
                    },
                    {   img:blog2,
                        blogp1:"may 14,2020",
                        blogh3:"far far away behind the word mountains",
                        blogp2:"Vokalia and Consonantia, there live the blind texts. Separated they live.",
                        bloga:"read more",
                    },
                    {   img:blog3,
                        blogp1:"may 14,2020",
                        blogh3:"far far away behind the word mountains",
                        blogp2:"Vokalia and Consonantia, there live the blind texts. Separated they live.",
                        bloga:"read more",
                    },
                    {   img:blog4,
                        blogp1:"may 14,2020",
                        blogh3:"far far away behind the word mountains",
                        blogp2:"Vokalia and Consonantia, there live the blind texts. Separated they live.",
                        bloga:"read more",
                    }
        ]

  
        export class Blog extends Component{render()
        {
    return (
            

    //   <div>
            <div className='components-5'>
                <div className='blog-container'>
                    <div className='blog-head'>
                        <h1>blog</h1>
                        <h3>recent posts</h3>
                    </div>
                    <div className='blog-row'>

                        {person.map((e,i) => {
                         return <div key={i} className='blog-col'>
                                    <div className='blog-img'>
                                        <img src={e.img}/>
                                    </div>
                                    <div className='blog-con'>
                                        <p>{e.blogp1}</p>
                                        <h3>{e.blogh3}</h3>
                                        <p>{e.blogp2}</p>
                                    </div>
                                    <div className='blog-a'>
                                        <a href='#'>{e.bloga}</a>
                                    </div>
                                 </div>
                             }
                             )
                         }    
                     </div>
                </div>
            </div>
                        )}};
  
                   
                       
   export default Blog
