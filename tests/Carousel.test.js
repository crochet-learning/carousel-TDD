import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from '../src/Carousel';
import CarouselButton from '../src/CarouselButton';
import CarouselSlide from '../src/CarouselSlide';

describe('Carousel', () => {
  let wrapper;

  const slides = [
    {
      imgUrl: 'https:example.com/slide1.png',
      description: 'Slide 1',
      attribution: 'Uno Pizzeria'
    },
    {
      imgUrl: 'https:example.com/slide3.png',
      description: 'Slide 2',
      attribution: 'Dos Equis'
    },
    {
      imgUrl: 'https:example.com/slide3.png',
      description: 'Slide 3',
      attribution: 'Three Amigos'
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Carousel slides={slides} />);
  });

  it('renders a div', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('has an initial slideIndex of 0', () => {
    expect(wrapper.state('slideIndex')).toBe(0);
  });

  it('renders a CarouselButton labeled Prev', () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(0)
        .prop('children')
    ).toBe('Prev');
  });

  it('renders a CarouselButton labeled Next', () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(1)
        .prop('children')
    ).toBe('Next');
  });

  describe('when a middle slide selected', () => {
    beforeEach(() => {
      wrapper.setState({ slideIndex: 1 });
    });

    it('decrements slideIndex when Prev is clicked', () => {
      wrapper.setState({ slideIndex: 1 });
      wrapper.find('[data-action="prev"]').simulate('click');
      expect(wrapper.state('slideIndex')).toBe(0);
    });

    it('increments slideIndex when Next is clicked', () => {
      wrapper.setState({ slideIndex: 1 });
      wrapper.find('[data-action="next"]').simulate('click');
      expect(wrapper.state('slideIndex')).toBe(2);
    });
  });

  describe('when first slide selected', () => {
    it('wraps the slideIndex to last index when Prev is clicked', () => {
      wrapper.setState({ slideIndex: 0 });
      wrapper.find('[data-action="prev"]').simulate('click');
      expect(wrapper.state('slideIndex')).toBe(slides.length - 1);
    });
  });

  describe('when last slide selected', () => {
    it('wraps the slideIndex to first index when Next is clicked', () => {
      wrapper.setState({ slideIndex: slides.length - 1 });
      wrapper.find('[data-action="next"]').simulate('click');
      expect(wrapper.state('slideIndex')).toBe(0);
    });
  });

  it('renders the current slide as a CarouselSlide', () => {
    let slideProps;
    slideProps = wrapper.find(CarouselSlide).props();
    expect(slideProps).toEqual({
      ...CarouselSlide.defaultProps,
      ...slides[0]
    });
    wrapper.setState({ slideIndex: 1 });
    slideProps = wrapper.find(CarouselSlide).props();
    expect(slideProps).toEqual({
      ...CarouselSlide.defaultProps,
      ...slides[1]
    });
  });
});

describe('Img', () => {
  let mounted;
  const imgUrl = 'https://example.com/default.jpg';

  beforeEach(() => {
      const Img = CarouselSlide.defaultProps.Img;
      mounted = mount(
          <Img src={imgUrl} imgHeight={500} />
      );
  });

  it('renders an img with the given src', () => {
    expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
  })
});
