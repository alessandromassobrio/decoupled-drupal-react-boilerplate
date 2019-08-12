import React, { Component } from "react";
import Articles from "./components/nodes/articles/Articles";
import config from './config';

const API_URL = `${config.baseurl}jsonapi`;
const NODE_TYPE = 'article';
const ENDPOINT_URL = `${API_URL}/node/${NODE_TYPE}`;

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles() {
    fetch(ENDPOINT_URL, {mode:'cors'})
      .then((rsp) => {
        return rsp.json();
      })
      .then((data) => this.updateData(data))
      .catch(err => console.log('Fetching Articles Failed', err));
  }

  updateData(rsp) {
    this.setState({articles: rsp.data});
  }

  render() {
    return (
      <div className="App">
        <h1>A list of nodes fetched from a Drupal 8x installation</h1>
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
