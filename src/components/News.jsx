import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        const api = "https://newsapi.org/v2/top-headlines?apiKey=e77c1390a15145a89747d06a007c36f6&country=in&category=science&q=space";
        let data = await fetch(api);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }
    render() {
        return (
            <div className="container">
                <h1 className='my-3'>NewsApp: Top Headlines</h1>
                <div className='row'>
                    {/* Rendering all the articles present in the state */}
                    {this.state.articles.map((elem)=>{
                        let desc = elem.description ? elem.description : "No description available";
                        let imageUrl = elem.urlToImage ? elem.urlToImage : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

                        return <div className="col-4 my-1" key={elem.url}>
                            <NewsItem title={elem.title.slice(0,50)+"..."} desc={desc.slice(0,100) + "..."} imageUrl={imageUrl} url={elem.url} />
                        </div>
                    })}
                </div>
            </div>

        )
    }
}
