import styled from "styled-components";
import Button from "./Button";

const Hero = ({ smText, bgText, imgUrl, paragraph, height, btn }) => {
  return (
    <Wrapper imgUrl={imgUrl} height={height}>
      <div className="container">
        <h3>{smText}</h3>
        <h1 className="lg-text">{bgText}</h1>
        {paragraph && <p>{paragraph}</p>}
        {btn && (
          <Button
            text={btn}
            path="/pricing"
            bgColor="transparent"
            bdColor="var(--white)"
            txColor="var(--white)"
            bdColorHover="var(--white)"
            bgColorHover="var(--white)"
            txColorHover="var(--green-2)"
          />
        )}
      </div>
    </Wrapper>
  );
};
export default Hero;

const Wrapper = styled.section`
  width: 100%;
  min-height: 300px;
  height: calc(300px + ${(props) => props.height});
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
    font-size: 2.5rem;
    padding: 0.1em 0;
  }

  p {
    font-family: var(--font-2);
    font-size: 1.1rem;
    color: var(--white);
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.5px;
    width: 100%;

    margin-bottom: 3em;
  }

  @media screen and (min-width: 450px) {
    .lg-text {
      font-size: clamp(4.5rem, 9vw, 9rem);
    }
    p {
      max-width: 630px;
    }
  }

  @media screen and (min-width: 950px) {
    min-height: 590px;
    height: calc(590px + ${(props) => props.height});
    background-position: 0 20%;
    .container {
      padding: 0 var(--side-contain-950);

      max-width: var(--side-contain-max);
      margin: 0 auto;
    }
    .lg-text {
      font-size: clamp(5.5rem, 11vw, 11rem);
      padding: 0;
    }
  }
`;
