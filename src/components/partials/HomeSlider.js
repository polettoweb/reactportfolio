import React, { Component } from "react";
import Carousel from "nuka-carousel";

class HomeSlider extends Component {
    render() {
        setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 0);
        return (
            <Carousel slidesToShow={2} slideWidth={1} cellSpacing={50}>
                <img src="/img/aqua-pura.jpg" alt="Aqua Pura" />
                <img src="/img/bbvenezia.jpg" alt="B&amp;B Venezia" />
                <img src="/img/belling.jpg" alt="Belling" />
                <img src="/img/tankard.jpg" alt="The Lantern Tankard" />
                <img src="/img/stoves.jpg" alt="Stoves" />
            </Carousel>
        );
    }
}
export default HomeSlider;
