import React, { Component } from "react";
import ArticleItem from "./ArticleItem";

class Articles extends Component {
  render() {
    return (
      <div>
        {this.props.articles.map(item => (
          <ArticleItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Articles;
