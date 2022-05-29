import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, image, newsId,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="badge bg-secondary">{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {this.props.author?this.props.author:"unknown"} on {new Date(this.props.date).toGMTString()}</small></p>
            <a rel="noreferrer"  href={newsId} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
