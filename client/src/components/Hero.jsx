import styled from "styled-components";

const Hero = ({ text, imgUrl }) => {
  return (
    <Wrapper imgUrl={imgUrl}>
      <h3>it's time to</h3>
      <h1 className="lg-text">{text}</h1>
    </Wrapper>
  );
};
export default Hero;

const Wrapper = styled.section`
  width: 100%;
  height: 300px;
  background-color: wheat;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 44%;

  padding: 0 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .lg-text {
    font-size: 3rem;
  }

  @media screen and (min-width: 450px) {
    .lg-text {
      font-size: clamp(4.5rem, 9vw, 9rem);
    }
  }

  @media screen and (min-width: 950px) {
    height: 590px;
    background-position: 0 60%;
  }
`;
