import styled from "styled-components";
import { Button } from "../components";

const Gallery = ({ title }) => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">Gallery</h1>
        <div className="gallery-columns">
          <div className="gallery-column">
            <img src="" alt="" />
            <h1>Sub Title</h1>
            <Button />
          </div>
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
