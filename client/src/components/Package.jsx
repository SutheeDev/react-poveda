import { Button } from "../components";
import styled from "styled-components";

const Package = ({ title, info, price, bgColor, txColor, btnText, path }) => {
  return (
    <Wrapper bgColor={bgColor} txColor={txColor}>
      <div className="container">
        <div className="info-container">
          <h2 className="title">{title}</h2>
          <p className="info">{info}</p>
          {btnText === "contact" ? (
            <div className="btn-container">
              <a href="#contact" className="scroll-btn">
                {btnText}
              </a>
            </div>
          ) : (
            <Button
              text={btnText}
              path={path}
              bgColor="transparent"
              bdColor={txColor}
              txColor={txColor}
              bgColorHover={txColor}
              bdColorHover={txColor}
              txColorHover={bgColor}
            />
          )}
        </div>

        <div className="price-container">
          <h2 className="from">from</h2>
          <h1 className="price">${price}</h1>
        </div>
      </div>
    </Wrapper>
  );
};
export default Package;

const Wrapper = styled.section`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txColor};
  padding: 6em var(--side-contain-sm);
  .title,
  .from,
  .price {
    color: ${(props) => props.txColor};
  }
  .info {
    font-size: 0.85rem;
    line-height: 1.8;
    letter-spacing: 2px;
  }
  h2 {
    margin-bottom: 1em;
  }
  .btn-container {
    margin: 2em 0 5em 0;
  }
  .price {
    font-size: 4rem;
  }
  .scroll-btn {
    display: block;
    text-align: center;
    width: 100%;
    font-family: var(--font-2);
    font-size: 0.8rem;
    letter-spacing: 3px;
    padding: 0.7em 2em;
    text-transform: uppercase;
    border: 3px solid ${(props) => props.txColor};
    background-color: transparent;
    color: ${(props) => props.txColor};
    border-radius: 35px;
    cursor: pointer;

    transition: var(--btn-transition);
    &:hover {
      color: ${(props) => props.bgColor};
      background-color: ${(props) => props.txColor};
    }
  }
  @media screen and (min-width: 450px) {
    .scroll-btn {
      display: inline;
      padding: 0.7em 3em;
    }
  }
  @media screen and (min-width: 950px) {
    padding: 6em 0;
    .container {
      display: flex;

      padding: 0 var(--side-contain-950);
      max-width: var(--side-contain-max);
      margin: 0 auto;
    }
    .info-container,
    .price-container {
      width: 50%;
    }
    .price-container {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      align-self: center;
      gap: 2em;
    }
    .from {
      font-size: 1.7rem;
    }
    .price {
      font-size: 7.5rem;
    }
    .btn-container {
      margin: 4em 0 0 0;
    }
    .title {
      font-size: 2.5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .info {
      font-size: 1rem;
    }
    .scroll-btn {
      font-size: 1rem;
    }
  }
`;
