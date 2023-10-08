import styled from "styled-components";

const Hero = ({ smText, bgText, imgUrl }) => {
  return (
    <Wrapper imgUrl={imgUrl}>
      <div className="container">
        <h3>{smText}</h3>
        <h1 className="lg-text">{bgText}</h1>
      </div>
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

  display: flex;
  flex-direction: column;
  justify-content: center;

  .container {
    width: 100%;
    padding: 0 var(--side-contain-sm);
  }

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
    .container {
      padding: 0 var(--side-contain-950);

      max-width: var(--side-contain-max);
      margin: 0 auto;
    }
  }
`;
