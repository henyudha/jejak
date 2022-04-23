import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  // color: #fff;
  // width: 100%;
  // padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 6px;
  margin-bottom: 6px;

  @media (max-width: 560px) {
    margin-top: 26px;
    margin-bottom: 0;
    text align: left;
    padding-left:24px;
  }
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
