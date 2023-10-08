import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_03_VISIT.jpg";

const Visit = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="visit bali" imgUrl={imgUrl} />
    </Wrapper>
  );
};
export default Visit;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
