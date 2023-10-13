import styled from "styled-components";

const Testimonial = ({ bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <div>testimonial</div>
    </Wrapper>
  );
};
export default Testimonial;

const Wrapper = styled.section`
  background-color: ${(props) => props.bgColor};
  color: var(--white);
  padding: 6em var(--side-contain-sm);
`;
