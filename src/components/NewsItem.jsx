import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        // Object desctructuring, props are used inside function;
        let {title,desc,imageUrl,url} = this.props;
        return (
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p class="card-text"><small class="text-body-secondary">From: {this.props.source}</small></p>
                        <p class="card-text"><small class="text-body-secondary">By: {this.props.author}</small></p>
                        <p class="card-text"><small class="text-body-secondary">Date: {this.props.time.split("T")[0]}</small></p>
                        <a target="_blank" href={`${url}`} className="btn btn-sm btn-primary" rel='noreferrer'>Read More</a>
                    </div>
            </div>
        )
    }
}
