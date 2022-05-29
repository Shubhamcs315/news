import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
export class News extends Component {
    // static defaultProps ={
    //     pageSize: 6,
    //     category:"genral"
    // }
    // static propTypes ={
    //     pageSize:PropTypes.number,
    //     category: PropTypes.string
    // }
    constructor(props){
        super(props);
        console.log(" iam constructor");
        this.state={
            articles:[],
            loading:false,
            page : 1
        }
        document.title=`${this.props.category.toUpperCase()}-NewsMonkey`;
    }
    async componentDidMount(){
        console.log("cdm");
        this.setState({loading:true});
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}`;
        let data =await fetch(url);
        let parsedData= await data.json();
        console.log(data);
        this.setState({articles: parsedData.articles});
        this.setState({loading:false});
    }
    handlePrevious =async()=>{
        console.log("previous");
        this.setState({page:this.state.page-1});
        console.log(this.state.page);
        if(this.state.page===1){
            this.setState({page:1});
        }
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        let data =await fetch(url);
        let parsedData= await data.json();
        console.log(data);
        this.setState({articles: parsedData.articles});
        this.setState({loading:false});
        // this.state={
        //     page:this.state.page-1,
        //     // articles: parsedData.articles
        // }
    }
    handleNext =async()=>{
        console.log(this.props.category);
        this.setState({page:this.state.page+1});
        console.log(this.state.page);
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data =await fetch(url);
        let parsedData= await data.json();
        console.log(data);
        this.setState({articles: parsedData.articles});
        this.setState({loading:false});
        // this.state={
        //     page:this.state.page+1,
        //     // articles: parsedData.articles
        // }
    }
  render() {
      console.log("render");
    return (
      <div>
          <div className="container my-3">
         <h2 className='text-center'>NewsMonkey-Top Headlines On {this.props.category.toUpperCase()} </h2>
         {this.state.loading &&  <Spinner/>}
         <div className="row">
         {this.state.articles.map((element)=>{
             return  <div className="col-md-4" key={element.url}>
             <Newsitem title={element.title?element.title.slice(0,45):""} source={element.source.name} author={element.author} date={element.publishedAt} description={element.description?element.description.slice(0,88):""} image={element.urlToImage?element.urlToImage:"https://cdn.mos.cms.futurecdn.net/oU8rMHf2nP2vzEi36fpj3V-1200-80.jpg"} newsId={element.url}/>
             </div>
         })}
            
         </div>
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button"  className="btn btn-dark" onClick={this.handlePrevious}>Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
          </div>
          
     </div>
    )
  }
}

export default News