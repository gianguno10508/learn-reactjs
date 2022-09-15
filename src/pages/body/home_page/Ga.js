import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";


  
  
function Ga() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    const slides = [
        {
          city: 'Paris',
          country: 'France',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
        },
        {
          city: 'Singapore',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
        },
        {
          city: 'Prague',
          country: 'Czech Republic',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
        },
        {
          city: 'Amsterdam',
          country: 'Netherlands',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
        },
        {
          city: 'Moscow',
          country: 'Russia',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
        },
      ];
    
    return (
        <div className={classNames('slider', { 's--ready': sliderReady })}>
          <p className="slider__top-heading">Travelers</p>
          <div className="slider__slides">
            {this.props.slides.map((slide, index) => (
              <div
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                key={slide.city}
                >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                  <h2 className="slider__slide-heading">
                    {slide.city.split('').map(l => <span>{l}</span>)}
                  </h2>
                  <p className="slider__slide-readmore">read more</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="slider__control" onClick={() => this.changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
        </div>

    );
}

export default Ga;