import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pagesize: 20,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newz`;
  }

  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9064ac42512040cca2c1f03b2037e1d7&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState(nextState => ({ page: nextState.page + 1 }), async() => {
      const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9064ac42512040cca2c1f03b2037e1d7&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
      });
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px'}}>Newz - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/news/1024/branded_news/e522/live/d33dbc50-8214-11ef-ad45-893aa022fcbc.jpg"} newsUrl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} source={element.source.name ? element.source.name : "unknown"} />
                </div>
              })}  
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
