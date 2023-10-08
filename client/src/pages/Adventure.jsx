import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_04_ADVENTURE.jpg";

const Adventure = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time for`} bgText="action" imgUrl={imgUrl} />
    </Wrapper>
  );
};
export default Adventure;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
