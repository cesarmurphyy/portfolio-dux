import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';
import BasePage from '../components/BasePage';

class Portfolio extends React.Component {
  static getInitialProps({ query }) {
    const portfolioId = query.id;
    let portfolio = {};

    try {
      const response = axios.get(
        `https://jsonplaceholder.typicode.com/posts${portfolioId}`
      );
      portfolio = response.data;
    } catch (err) {
      console.log(err);
    }

    return { portfolio };
  }

  render() {
    const { portfolio } = this.props;

    return (
      <BaseLayout>
        <BasePage>
          <h1>{portfolio.title}</h1>
          <p>Body: {portfolio.body}</p>
          <p>ID: {portfolio.id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
