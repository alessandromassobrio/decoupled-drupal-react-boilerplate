import React, { Component } from "react";
import Articles from "./components/nodes/articles/Articles";
import axios from "axios";
import config from './config';

const API_URL = `${config.baseurl}jsonapi`;
const NODE_TYPE = 'article';
const ENDPOINT_URL = `${API_URL}/node/${NODE_TYPE}`;

class App extends Component {
  state = {
    articles: []
  }

  async componentDidMount() {
    const rsp = await axios.get(`${ENDPOINT_URL}`);

    this.setState({ articles: rsp.data });
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
