import axios from 'axios';
import { useEffect, useState } from 'react';
import banner_default from '../../../img/banner.jpg';
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import "../../../styles/slider-animations.css";
import "../../../styles/styles.css";
function Banner() {
    const settings = {
        slider: 'slider',
        previousButton: 'previousButton',
        nextButton: 'nextButton',
        buttonDisabled: 'disabled',
        track: 'track',
        slide: 'slide',
        hidden: 'hidden',
        previous: 'previous',
        current: 'current',
        next: 'next',
        animateIn: 'animateIn',
        animateOut: 'animateOut',
      };
    const [banner, setBanner] = useState([]);
    const url = 'http://localhost:828/wp-json/wp/v2/get/banner/';
    useEffect(() => {
        const fetchDataCategories = async () => {
            try {
                axios.get(url).then(function (response) {
                    setBanner(response.data);
                }, function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataCategories();
    }, []);
    return (

        <div
            className='banner'
        >
            <Slider className="slider-wrapper" {...settings}>
                {banner.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.img}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <Slider {...settings}>
                    {banner.map((d, index) => (
                        <div
                            className='col-banner'
                            key={index}
                        >
                            <div className="img-banner">
                                <img src={d} />
                            </div>
                        </div>
                    ))}
                </Slider> */}
        </div>

    )
}

export default Banner;