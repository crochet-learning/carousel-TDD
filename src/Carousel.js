import React from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';
import HasIndex from './HasIndex';

export class Carousel extends React.PureComponent {
    static propTypes = {
        defaultImg: CarouselSlide.propTypes.Img,
        defaultImgHeight: CarouselSlide.propTypes.imgHeight,
        slideIndexDecrement: PropTypes.func.isRequired,
        slideIndexIncrement: PropTypes.func.isRequired,
        slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
            .isRequired
    };

    static defaultProps = {
        defaultImg: CarouselSlide.defaultProps.Img,
        defaultImgHeight: CarouselSlide.defaultProps.imgHeight
    };

    handlePrevClick = () => this.props.slideIndexDecrement(this.props.slides.length);
    handleNextClick = () => this.props.slideIndexIncrement(this.props.slides.length);

    render() {
        const {
            defaultImg,
            defaultImgHeight,
            slideIndex,
            slideIndexDecrement: _slideIndexDecrement,
            slideIndexIncrement: _slideIndexIncrement,
            slides,
            ...rest
        } = this.props;

        return (
            <div {...rest}>
                <CarouselSlide
                    Img={defaultImg}
                    imgHeight={defaultImgHeight}
                    {...slides[slideIndex]}
                />
                <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
                    Prev
                </CarouselButton>
                <CarouselButton data-action="next" onClick={this.handleNextClick}>
                    Next
                </CarouselButton>
            </div>
        );
    }
}

export default HasIndex(Carousel, 'slideIndex');