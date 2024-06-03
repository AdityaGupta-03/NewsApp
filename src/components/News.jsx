import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        // This.state is the state of the class
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        const api = `https://newsapi.org/v2/top-headlines?apiKey=e77c1390a15145a89747d06a007c36f6&country=in&category=science&pagesize=9&page=${this.state.page}`;
        let data = await fetch(api);
        let parsedData = await data.json();

        let pages = parsedData.totalResults;
        this.setState({
            articles: parsedData.articles,
            totalPages: pages
        });
    }

    // Arrow function automatically binds this with instance of the class
    handleNext = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalPages / 9)) {
            const api = `https://newsapi.org/v2/top-headlines?apiKey=e77c1390a15145a89747d06a007c36f6&country=in&category=science&pagesize=9&page=${this.state.page + 1}`;
            try {
                let data = await fetch(api);
                let parsedData = await data.json();
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles
                });
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error appropriately, e.g., show an error message to the user
            }
        }
    }

    handlePrev = async () => {
        const api = `https://newsapi.org/v2/top-headlines?apiKey=e77c1390a15145a89747d06a007c36f6&country=in&category=science&pagesize=9&page=${this.state.page - 1}`;
        try {
            let data = await fetch(api);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error appropriately, e.g., show an error message to the user
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='my-3'>NewsApp: Top Headlines</h1>
                <div className='row'>
                    {/* Rendering all the articles present in the state */}
                    {this.state.articles.map((elem) => {
                        let desc = elem.description ? elem.description : "No description available";
                        let imageUrl = elem.urlToImage ? elem.urlToImage : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

                        return <div className="col-4 my-1" key={elem.url}>
                            <NewsItem title={elem.title.slice(0, 50) + "..."} desc={desc.slice(0, 100) + "..."} imageUrl={imageUrl} url={elem.url} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-around my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Prev</button>
                    <button disabled={this.state.page === Math.ceil(this.state.totalPages / 9)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}
