import { Button } from "./Button";
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
    <Wrapper>
      <div className="container">
        <div className="img-container">
          <h4 className="img-title">{title}</h4>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="content-container">
          <h4 className="content-title">{title}</h4>
          <p>{pFirst}</p>
          {pSecond && <p>{pSecond}</p>}
          {pThird && <p>{pThird}</p>}
          <Button />
        </div>
      </div>
    </Wrapper>
  );
};
export default Article;

const Wrapper = styled.article``;

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
