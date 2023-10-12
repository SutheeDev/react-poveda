import styled from "styled-components";
import { Button } from "../components";

const GalleryColumn = ({ subTitle, btnText }) => {
  return (
    <Wrapper className="gallery-column">
      <img src="" alt="" />
      <h2>{subTitle}</h2>
      <Button text={btnText} />
    </Wrapper>
  );
};
export default GalleryColumn;

const Wrapper = styled.div``;
