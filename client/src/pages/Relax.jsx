import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_06_RELAX.jpg";

const Relax = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="relax in bali" imgUrl={imgUrl} />
    </Wrapper>
  );
};
export default Relax;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
