import { Button } from "../components";
import styled from "styled-components";

const Package = ({ title, info, price, bgColor, txColor }) => {
  return (
    <Wrapper bgColor={bgColor} txColor={txColor}>
      <div className="container">
        <div className="info-container">
          <h2>{title}</h2>
          <p>{info}</p>
          <Button text="learn more" />
        </div>

        <div className="price-container">
          <h2>from</h2>
          <h1>${price}</h1>
        </div>
      </div>
    </Wrapper>
  );
};
export default Package;

const Wrapper = styled.section``;
