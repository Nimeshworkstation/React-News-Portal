import React, { Component } from 'react'

export default function NewsItemComponent(props) {
  return (
    <>
        <div className="card" style={{width: '18rem'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{left:'95%'}}>
    {props.source}
  </span>

        <img src={props.imageUrl} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-success">Read More...</a>
          <p className="card-text"><small className="text-body-secondary">By  {props.author?props.author:'Unknown'} on {new Date(props.pubdate).toGMTString()}</small></p>
        </div>
      </div>
      


      </>
  )
}
