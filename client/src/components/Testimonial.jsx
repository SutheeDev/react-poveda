import styled from "styled-components";
import Attestants from "../utils/Attestant";

// import Swiper core and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Testimonial = ({ bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <h1 className="title">what they say about us</h1>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        speed={500}
        navigation={true}
      >
        {Attestants.map((attestant) => {
          const { name, testimonial } = attestant;
          return (
            <SwiperSlide>
              <div className="slide">
                <p className="testimonial">{testimonial}</p>
                <h4 className="attestant">- {name} -</h4>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};
export default Testimonial;

const Wrapper = styled.section`
  text-align: center;
  background-color: ${(props) => props.bgColor};
  color: var(--white);
  padding: 6em var(--side-contain-sm);
  .slide {
    text-align: center;
  }
  .testimonial {
    font-size: 0.85rem;
    margin: 2em 0;
    line-height: 1.8;
    letter-spacing: 2px;
  }
  .attestant {
    font-family: var(--font-2);
    font-size: 1.1rem;
    text-transform: capitalize;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  @media screen and (min-width: 450px) {
    .slide {
      padding: 0 3em;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: inline;
      --swiper-navigation-size: 18px;
      --swiper-navigation-top-offset: 38%;
      --swiper-navigation-sides-offset: 0;
      --swiper-navigation-color: var(--white);
    }
  }
  @media screen and (min-width: 950px) {
    .title {
      font-size: 2.5rem;
    }
    .slide {
      max-width: 950px;
      margin: 0 auto;
    }
    .testimonial {
      margin: 3em 0;
    }
    .swiper {
    }
  }
  @media screen and (min-width: 1200px) {
    .swiper {
      width: var(--side-contain-max);
    }
    .swiper-button-prev,
    .swiper-button-next {
      --swiper-navigation-sides-offset: 27px;
    }
  }
`;
