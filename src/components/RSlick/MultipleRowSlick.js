import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import styleSlick from './MultipleRowSlick.module.css'
export default class AutoPlay  extends Component {
    
    renderFilms = () => {
        return this.props.arrFilm.map((film) => {
            return <div className={`${styleSlick['width-item']}`}>
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
            cssEase: "linear"
          };
        return (
            <div>
                <Slider {...settings}>
                    {this.renderFilms()}
                </Slider>
            </div>
        );
    }
}