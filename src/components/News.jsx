import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps ={
        country : "in",
        category: "general",
        query: "",
        sources: "cnn"
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        query: PropTypes.string,
        sources: PropTypes.string
    }
    pageSize=9;
    constructor(props) {
        super(props);
        // This.state is the state of the class
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        
        document.title = this.props.category + " | NewsApp";
    }

    async updateNews(){
        this.setState({loading :true});
        const api = `https://newsapi.org/v2/top-headlines?apiKey=e77c1390a15145a89747d06a007c36f6&country=${this.props.country}&category=${this.props.category}&pagesize=${this.pageSize}&page=${this.state.page}`;
        let data = await fetch(api);
        let parsedData = await data.json();
        let pages = parsedData.totalResults;

        this.setState({
            articles: parsedData.articles,
            totalPages: pages,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    // Arrow function automatically binds this with instance of the class
    handleNext = async () => {
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    handlePrev = async () => {
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center' style={{margin: "40px 0px"}}>NewsApp: Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {/* Rendering all the articles present in the state */}
                    {   !this.state.loading && this.state.articles.map((elem) => {
                        let desc = elem.description ? elem.description : "No description available";
                        let imageUrl = elem.urlToImage ? elem.urlToImage : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

                        return <div className="col-4 my-3" key={elem.url}>
                            <NewsItem title={elem.title.slice(0, 50) + "..."} desc={desc.slice(0, 100) + "..."} imageUrl={imageUrl} url={elem.url} author={elem.author} time={elem.publishedAt} source={elem.source.name}/>
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-around my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Prev</button>
                    <button disabled={this.state.page === Math.ceil(this.state.totalPages / this.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}
