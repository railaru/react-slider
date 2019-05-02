import React from "react";
import Slider from "react-slick";
import Card from './Card'


class ResponsiveSlider extends React.Component {
    render() {

        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <div
                {...props}
                className={
                    "slick-prev slick-arrow" +
                    (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-label="Previous"
                aria-disabled={currentSlide === 0 ? true : false}
                type="button"
            >
                <i className="material-icons"> keyboard_arrow_left</i>
            </div>
        );
        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <div
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-label="Next"
                aria-disabled={currentSlide === slideCount - 1 ? true : false}
                type="button"
            >
                <i className="material-icons"> keyboard_arrow_right</i>
            </div>
        );

        const settings = {
            dots: true,
            dotsClass: 'responsiveSliderDots',
            arrows: true,
            prevArrow: <SlickArrowLeft />,
            nextArrow: <SlickArrowRight />,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 639,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        };

        return (                         
            <Slider className='responsive-slider' {...settings}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Slider>                        
        );
    }
}

export default ResponsiveSlider