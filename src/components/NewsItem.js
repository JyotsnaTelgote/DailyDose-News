import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return ( 
    
      <div className="my-3">
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>{source}
  </span>
        <img src={!imageUrl?"https://c.ndtvimg.com/2023-05/vc30f4r_virat-kohli-gautam-gambhir-afp_625x300_02_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p classNmae="card-text"><small className='text-danger'>By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>

        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem