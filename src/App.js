import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Articles from './components/Articles';
import YearsMenu from './components/years-menu';

class App extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      value: "",
      date: "",
      years: 10
    }
  }

  handleSelectYear = (value) => {
    this.setState({years: value});
    this.getArticlesByDate(value);
  }

  getArticlesByDate = (value) => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear() - value;

    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;

    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:(' + today + ')&api-key=aW7pBkLc84EunnMPk4h1aGcOdugdri3q')
    .then( response => {
      this.setState({
        articles: response.data.response.docs,
        date: today
      });
    })
    .catch(function (error) {
      console.log("Error fetching data", error);
    });
  }

  componentDidMount = () => {
    this.getArticlesByDate(this.state.years);
  }

  render() {

    return (

      <div key={this.state.articles} className="App">
          <h1 id="site-header">Mews</h1>
          <YearsMenu selectNumber={this.handleSelectYear}></YearsMenu>
          <h3 id="publish-date">Publish date:  {this.state.date}</h3>    
          {this.state.articles.map((item, index) =>                      

            {
              let byline;
              if(item.hasOwnProperty("byline")){
                byline = item.byline["original"];
              } 

              if(index < 4){
              return (   
              <Articles headline={item.headline.main}
                      by={byline}
                      snippet={item.snippet}
                      lead_paragraph={item.lead_paragraph}
                      web_url={item.web_url}
                      collapsibleId={"collapsible" + index}
            ></Articles>);
            } else {
              return (null)
              }}
        
            )}
          

              
      </div>
    );
  }
}

export default App;
