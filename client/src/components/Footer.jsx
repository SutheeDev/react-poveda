import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo-container"></div>
      <div className="links-container"></div>
      <div className="contact-container">
        <p>email@example.com</p>
        <p>123-456-7890</p>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer``;
