import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        // Object desctructuring, props are used inside function;
        let { title, desc, imageUrl, url } = this.props;
        // let date = this.props.time.split("T")[0];
        let date = new Date(this.props.time).toGMTString();
        return (
            <div className="card">
                <span className="position-absolute badge rounded-pill bg-danger" style={{right:0}}>
                    {this.props.source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-body-secondary">By: {this.props.author ? this.props.author : "Unknown"}</small></p>
                    <p className="card-text"><small className="text-body-secondary">Date: {date}</small></p>
                    <a target="_blank" href={`${url}`} className="btn btn-sm btn-primary" rel='noreferrer'>Read More</a>
                </div>
            </div>
        )
    }
}
