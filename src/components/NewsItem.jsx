import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        // Object desctructuring, props are used inside function;
        let {title,desc,imageUrl,url} = this.props;
        return (
            <div className="card" style={{width:"18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a target="_blank" href={`${url}`} className="btn btn-sm btn-primary" rel='noreferrer'>Read More</a>
                    </div>
            </div>
        )
    }
}
