import React, { Component } from 'react';

class Articles extends Component{

    render() {
        return (
        <div className="article-container">
            <div className="article-header-container">
                <h3>{this.props.headline}</h3>
                <i><span>{this.props.by}</span></i>
                <p>{this.props.snippet}</p>
            </div>
           <div className="collapsible-container">
                <input id={this.props.collapsibleId} class="toggle" type="checkbox" />
                <label for={this.props.collapsibleId} className="collapsible-header lbl-toggle">Read More</label>              
                <div className="collapsible-content">
                <p>{this.props.lead_paragraph}</p>
                <div className="full-article-container">         
                    <a className="full-article-link" target="_blank" rel="noopener noreferrer" alt="link to full article" href={this.props.web_url}>Go to full article</a>                           
                </div>
                </div>
           </div> 
        </div>
        );    
    }


}

export default Articles;