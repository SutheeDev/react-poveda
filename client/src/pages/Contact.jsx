import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_08_CONTACT.jpg";

const Contact = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="contact us" imgUrl={imgUrl} />
    </Wrapper>
  );
};
export default Contact;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
