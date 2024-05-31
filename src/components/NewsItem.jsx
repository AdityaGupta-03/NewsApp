import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        return (
            <div className="card" style={{width:"18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.des}</p>
                        <a href="/Newsdetail" className="btn btn-primary">Explore</a>
                    </div>
            </div>
        )
    }
}
