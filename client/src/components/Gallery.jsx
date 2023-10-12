import styled from "styled-components";
import { Button, GalleryColumn } from "../components";

const Gallery = ({
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  bgColor,
  btnText1,
  btnText2,
  btnText3,
}) => {
  return (
    <Wrapper bgColor={bgColor}>
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="gallery-columns">
          <GalleryColumn subTitle={subTitle1} btnText={btnText1} />
          <GalleryColumn subTitle={subTitle2} btnText={btnText2} />
          <GalleryColumn subTitle={subTitle3} btnText={btnText3} />
        </div>
        <Button />
      </div>
    </Wrapper>
  );
};
export default Gallery;

const Wrapper = styled.section`
  padding: 6em var(--side-contain-sm);
  @media screen and (min-width: 950px) {
    .title {
      font-size: 2.5rem;
    }
  }
`;

// 1. License To Live
//      - Title
//      - 3 columns
//      - img / sub title (optional) / button (optional)
// 2. Follow Us On Instagram
//      - Title
//      - 3 columns
//      - img
//      - One main button (optional)

// SMALL SCREEN
// 1. License To Live
//      - Title -> img -> sub title -> button ->  REPEAT 2 more times
// 2. Follow Us On Instagram
//      - Title -> img -> img -> img -> main button
