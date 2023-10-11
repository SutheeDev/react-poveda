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
}) => {
  return (
    <Wrapper bgColor={bgColor} txColor={txColor} btnHoverColor={btnHoverColor}>
      <div className={imgLeft ? "container imgLeft" : "container"}>
        <div className="img-container">
          <h1 className="img-title">{title}</h1>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="content-container">
          <h1 className="content-title">{title}</h1>
          <p className="paragraph">{pFirst}</p>
          {pSecond && <p className="paragraph">{pSecond}</p>}
          {pThird && <p className="paragraph">{pThird}</p>}
          <Button
            text="learn more"
            bgColor="transparent"
            bdColor="var(--green-2)"
            txColor="var(--green-2)"
            bgColorHover="var(--green-2)"
            bdColorHover="var(--green-2)"
            txColorHover="var(--white)"
          />
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
  .content-title {
    display: none;
  }
  .img-title {
    margin-bottom: 1em;
  }
  .paragraph {
    font-size: 0.85rem;
    margin: 1.5em 0;
    line-height: 1.8;
    letter-spacing: 2px;
  }
  @media screen and (min-width: 950px) {
    .img-title {
      display: none;
    }
    .content-title {
      display: block;
    }
  }
`;

// Small screen
// Title
// img
// paragraph
// btn

// Big screen
// left -- right
// img -- Title / paragraph / btn

// Props
// bgColor / txColor / btnHoverColor / right / left / img
// right -> flex-direction: row;
// left -> flex-direction: row-reverse;
