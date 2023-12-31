import Button from "./Button";
import styled from "styled-components";

const Article = ({
  title,
  pFirst,
  pSecond,
  pThird,
  bgColor,
  txColor,
  btnHoverColor,
  imgLeft,
  img,
  btnText,
  path,
}) => {
  return (
    <Wrapper
      bgColor={bgColor}
      txColor={txColor}
      btnHoverColor={btnHoverColor}
      img={img}
    >
      <div className={imgLeft ? "container imgLeft" : "container imgRight"}>
        <div className="img-container">
          <h1 className="img-title">{title}</h1>
          <div className="img"></div>
        </div>

        <div className="content-container">
          <h1 className="content-title">{title}</h1>
          <div className="p-container">
            <p className="paragraph">{pFirst}</p>
            {pSecond && <p className="paragraph">{pSecond}</p>}
            {pThird && <p className="paragraph">{pThird}</p>}
          </div>
          {btnText && (
            <Button
              className="btn"
              text={btnText}
              bgColor="transparent"
              bdColor={txColor}
              txColor={txColor}
              bgColorHover={txColor}
              bdColorHover={txColor}
              txColorHover={btnHoverColor}
              path={path}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default Article;

const Wrapper = styled.article`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txColor};
  padding: 6em var(--side-contain-sm);
  .img-title,
  .content-title {
    color: ${(props) => props.txColor};
  }
  .img {
    height: 100vw;
    max-height: 500px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 40%;
  }
  .content-title {
    display: none;
  }
  .img-title {
    margin-bottom: 1em;
  }
  .p-container {
    margin-bottom: 2em;
  }
  .paragraph {
    font-size: 0.85rem;
    margin: 1.5em 0;
    line-height: 1.8;
    letter-spacing: 2px;
  }
  @media screen and (min-width: 950px) {
    padding: 0 0;
    .img-title {
      display: none;
    }
    .content-title {
      display: block;
      font-size: 2.5rem;
    }
    .container {
      display: flex;
    }
    .container.imgRight {
      flex-direction: row-reverse;
    }
    .container.imgLeft {
      flex-direction: row;
    }
    .img-container,
    .content-container {
      width: 50%;
    }
    .img-container {
      height: 50vw;
      background-color: wheat;
    }
    .img {
      height: 100%;
      max-height: none;
    }
    .p-container {
      margin-bottom: 1em;
    }
    .container.imgLeft .content-container,
    .container.imgRight .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .container.imgLeft .content-container {
      padding: 2em var(--side-contain-950) 2em var(--inner-padding-950);
    }
    .container.imgRight .content-container {
      padding: 2em var(--inner-padding-950) 2em var(--side-contain-950);
    }
    @media screen and (min-width: 1200px) {
      .container.imgLeft .content-container,
      .container.imgRight .content-container {
        width: calc(600px - 27.2px);
      }
      .container.imgLeft .content-container {
        padding: 2em 0 2em var(--inner-padding-950);
      }
      .container.imgRight .content-container {
        padding: 2em var(--inner-padding-950) 2em 0;
      }
      .paragraph {
        font-size: 1rem;
      }
    }
    @media screen and (min-width: 1500px) {
      .container.imgLeft .content-container {
        padding: 2em 0 2em var(--inner-padding-max);
      }
      .container.imgRight .content-container {
        padding: 2em var(--inner-padding-max) 2em 0;
      }
    }
  }
`;
