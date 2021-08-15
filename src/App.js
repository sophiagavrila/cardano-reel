import React from 'react';
import { getAdaArticles } from './api';
import './App.css';
import { Container, Header } from "semantic-ui-react";
import ArticleList from './components/ArticleList';



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

    const { articles, apiError } = this.state;

    return (
      <Container>

        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
          Cardano Articles
        </Header>

        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}

      </Container>
    );
  }

}

export default App;
