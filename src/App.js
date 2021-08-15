import React from 'react';
import { getAdaArticles } from './api';
import './App.css';
import { Container, Header } from "semantic-ui-react";


class App extends React.Component {

  state = {
    articles: [],
    apiError: "",
  };

  async componentDidMount() {

    try {
      const response = await getAdaArticles();

      this.setState({ articles: response.articles })

      // this is just proving that the state was reset
      console.log(this.state)
    } catch (error) {
      this.setState({ apiError: "Could not find nay articles" })
    }

  }

  render() {

    return (

      <div>
        We'll add our code here!
      </div>
    );
  }

}

export default App;
