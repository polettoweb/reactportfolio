import React, { Component } from "react";
import PortfolioItem from "./partials/PortfolioItem";

class Workshop extends Component {
  render() {
    return (
      <div className="workshop">
        <h1>Workshop</h1>
        <PortfolioItem
          text="Second version of the portfolio using Vue.JS as framework"
          image="img/vue.jpg"
          tags="Vue.JS, Vuex, Sass"
          link="http://vue.marcopoletto.co.uk"
          linkTitle="Marco Poletto Vue.JS"
        />
      </div>
    );
  }
}

export default Workshop;
