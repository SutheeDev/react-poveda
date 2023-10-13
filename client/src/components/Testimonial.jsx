import styled from "styled-components";

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
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        speed={1000}
      >
        <SwiperSlide>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ea
              neque accusantium aliquid velit et esse corporis sed, eos
              voluptate vero, dolores expedita autem iure vel harum,
              consequuntur quas! Eaque hic inventore possimus quo iste eos, quod
              facilis atque voluptatem perspiciatis vel, illum quam rerum.
              Incidunt architecto excepturi hic earum?
            </p>
            <h4>- alice bloomberg</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ea
              neque accusantium aliquid velit et esse corporis sed, eos
              voluptate vero, dolores expedita autem iure vel harum,
              consequuntur quas! Eaque hic inventore possimus quo iste eos, quod
              facilis atque voluptatem perspiciatis vel, illum quam rerum.
              Incidunt architecto excepturi hic earum?
            </p>
            <h4>- alice bloomberg</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ea
              neque accusantium aliquid velit et esse corporis sed, eos
              voluptate vero, dolores expedita autem iure vel harum,
              consequuntur quas! Eaque hic inventore possimus quo iste eos, quod
              facilis atque voluptatem perspiciatis vel, illum quam rerum.
              Incidunt architecto excepturi hic earum?
            </p>
            <h4>- alice bloomberg</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
export default Testimonial;

const Wrapper = styled.section`
  background-color: ${(props) => props.bgColor};
  color: var(--white);
  padding: 6em var(--side-contain-sm);
`;
