import styled from "styled-components";
import { Button } from "../components";

const GalleryColumn = ({ subTitle, btnText, img }) => {
  return (
    <Wrapper className="gallery-column" img={img}>
      <div className="img"></div>
      {subTitle && <h2 className="sub-title">{subTitle}</h2>}
      {btnText && (
        <Button
          text={btnText}
          path=""
          bgColor="transparent"
          bdColor="var(--green-2)"
          txColor="var(--green-2)"
          bgColorHover="var(--green-2)"
          bdColorHover="var(--green-2)"
          txColorHover="var(--white)"
        />
      )}
    </Wrapper>
  );
};
export default GalleryColumn;

const Wrapper = styled.div`
  padding: 0 0 3em 0;
  .img {
    width: 100%;
    height: 100vw;
    max-height: 500px;

    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 70%;
  }
  .sub-title {
    color: var(--green-2);
    margin: 1em 0;
  }
  @media screen and (min-width: 950px) {
    .img {
      width: 100px;
      height: 100px;
    }
  }
`;
