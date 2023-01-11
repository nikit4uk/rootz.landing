// import React from 'react';

// const Slider = () => {
//     return (
//         <section id='slider'></section>
//     )
// }

// export default Slider;

import React, { Component } from "react";
import Slider from "react-slick";
import RootzSlide from '../../store/RootzSlider';
import './slider.scss';
import Previosly from '../../img/Slider/previosly-icon.svg';
import Next from '../../img/Slider/next-icon.svg';

export default class MultipleItems extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    state = {
        activeSlide: 0,
        activeSlide2: 0
    };

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current }),
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        };

        const renderSlide = (item, i) => {
            return (
                <div className="slide" key={`slide-${i}`}>
                    <div className="slide-wrap">
                        <img src={item.backImg}/>
                        <div className="info-wrap">
                            <h5 className="slide-title">{item.title}</h5>
                            <p className="slide-desc">{item.desc}</p>
                        </div>
                    </div>
                </div>
            )
        };

        return (
            <section id='slider'>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {RootzSlide.map((item, i) => renderSlide(item, i))}
                </Slider>
                <div className='pagination'>
                    <a onClick={this.previous}>
                        <img src={Previosly}/>
                    </a>
                    <p><span>{this.state.activeSlide + 1}</span> / 6</p>
                    <a onClick={this.next}>
                        <img src={Next}/>
                    </a>
                </div>
        </section>
        );
  }
}
