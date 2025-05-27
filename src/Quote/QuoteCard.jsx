import React, { useState } from 'react'
 
export default function QuoteCard(props) {
    console.log(props)
const{quote,author,count}=props
   return (<>
     
          <div className="text-center"></div>
          <div className="text-center ">
            <p className=" count col-5">Number of quotes visited:{count}</p>
            <div  className="quote col-6">
            <h1 className=" h1 fw-bold fst-italic text-uppercase">Quote</h1>
            <p>
              <em>{quote}</em>
            </p>
            </div>
              
          </div>
          <div className="author col-4 text-center">
            <span className=" h1 fw-bold fst-italic text-uppercase">Author</span>
            <p>{author}</p>
          </div>
          </>
  )
}
