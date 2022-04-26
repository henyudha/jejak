import { connect, styled } from "frontity";
import Link from "../link";

const Footer = ({ state }) => {
  return (
    <>
      <FootContainer>
        <FooterMenu>
            <NamaMenu><Link link="/tentang/">tentang kami</Link></NamaMenu>
            <NamaMenu><Link link="/disclaimer/">disclaimer</Link></NamaMenu>
            <NamaMenu><Link link="/privacy-policy/">privacy</Link></NamaMenu>
            <NamaMenu><Link link="/pedoman-media-siber/">pedoman-siber</Link></NamaMenu>
            {/* <NamaMenu><Link link="/copyright/">copyright</Link></NamaMenu> */}
          {/* &copy; 2021 - TQNN. Seluruh hak cipta dilindungi undang-undang. </p> */}
          </FooterMenu>
      </FootContainer>
    </>
  );
}

export default connect(Footer);

const FootContainer = styled.div`
border-top: 1px solid #cccccc;
color: #333;
font-size: 0.7em;
font-weight: 500;
text-align: center;
box-sizing: border-box; 
margin-bottom: 10px 0 24px;
justify-content: space-around;
`;

const FooterMenu = styled.ul`
  max-width: 800px;
  list-style-type: none;
  margin: 10px auto 20px;
  padding: 0 15px;
`;

const NamaMenu = styled.li`
  display: inline;
  margin: 0 10px; 
`;