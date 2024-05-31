import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-4">
                    <NewsItem title={"Cricket"} desc={"RCB again losses 10th time in a row"} />
                </div>
                <div className="col-4">
                    <NewsItem title={"Football"} desc={"RCB again losses 10th time in a row"} />
                </div>
                <div className="col-4">
                    <NewsItem title={"Badminton"} desc={"RCB again losses 10th time in a row"} />
                </div>
            </div>
        )
    }
}
