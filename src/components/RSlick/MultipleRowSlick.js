import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import styleSlick from './MultipleRowSlick.module.css'
export default class AutoPlay extends Component {

    renderFilms = () => {
        return this.props.arrFilm.map((film, index) => {
            return <div key={index} className={`${styleSlick['width-item']}`}>
                <Film infoFilm={film} />
            </div>
        })
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1.7,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        speed: 1000,

                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
            ]
        };
        return (
            <div>
                <Slider {...settings} className={this.props.className}>
                    {this.renderFilms()}
                </Slider>
            </div>
        );
    }
}