import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_07_PRICING.jpg";

const Pricing = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="choose bali" imgUrl={imgUrl} />
    </Wrapper>
  );
};
export default Pricing;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
