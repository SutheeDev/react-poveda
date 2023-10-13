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
  img1,
  img2,
  img3,
  mainBtnText,
  ig,
}) => {
  return (
    <Wrapper bgColor={bgColor}>
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className={ig ? "gallery-columns ig" : "gallery-columns"}>
          <GalleryColumn subTitle={subTitle1} btnText={btnText1} img={img1} />
          <GalleryColumn subTitle={subTitle2} btnText={btnText2} img={img2} />
          <GalleryColumn subTitle={subTitle3} btnText={btnText3} img={img3} />
        </div>
        {mainBtnText && (
          <Button
            text={mainBtnText}
            path=""
            bgColor="transparent"
            bdColor="var(--green-2)"
            txColor="var(--green-2)"
            bgColorHover="var(--green-2)"
            bdColorHover="var(--green-2)"
            txColorHover="var(--white)"
          />
        )}
      </div>
    </Wrapper>
  );
};
export default Gallery;

const Wrapper = styled.section`
  padding: 6em var(--side-contain-sm) 2em var(--side-contain-sm);
  text-align: center;
  .title {
    color: var(--green-2);
    margin-bottom: 1em;
  }
  .gallery-columns > * {
    padding-bottom: 4em;
  }
  .gallery-columns.ig :not(:last-child) {
    padding-bottom: var(--side-contain-sm);
  }
  @media screen and (min-width: 950px) {
    padding: 6em var(--side-contain-950);
    .title {
      font-size: 2.5rem;
      margin-bottom: 1.3em;
    }
    .gallery-columns {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: var(--side-contain-950);
    }
  }
  @media screen and (min-width: 1200px) {
    max-width: var(--side-contain-max);
    margin: 0 auto;
    .gallery-columns {
      gap: 3em;
    }
  }
`;
