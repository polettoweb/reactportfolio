import React, { Component } from "react";
import PortfolioItem from "./partials/PortfolioItem";

class Workshop extends Component {
  render() {
    return (
      <div className="portfolio">
      <div className="portfolio__content">
        <h1>Workshop</h1>
        <PortfolioItem
          text = "Second version of the portfolio using Vue.JS as framework."
          image="img/vue.jpg"
          tags="Vue.JS, Vuex, Sass"
          link="http://vue.marcopoletto.co.uk"
          linkTitle="Marco Poletto Vue.JS"
          linkGit="https://github.com/polettoweb/vueportfolio"
          linkGitTitle="Vue portfolio Github repository"
        />
        <PortfolioItem
          text = "Small example of ecommerce functionality in Vue.JS"
          image="img/vueCover.jpg"
          tags="Vue.JS, vue-resource, Imageur API"
          link="https://small-ecommerce-example-vuejs-ldaubcucrv.now.sh/"
          linkTitle="Small ecommerce example in Vue.JS"
          linkGit="https://github.com/polettoweb/vue-small-ecommerce"
          linkGitTitle="Vue eCommerce Github repository"
        />
        <PortfolioItem
          text = "Todo list Built with Vue.JS"
          image="img/vueCover.jpg"
          tags="Vue.JS"
          link="https://github.com/polettoweb/todo-vue"
          linkTitle="Todo list Built with Vue.JS"
          linkGit="https://github.com/polettoweb/todo-vue"
          linkGitTitle="Todo list Built with Vue.JS"
        />
      </div>
      </div>
    );
  }
}

export default Workshop;
