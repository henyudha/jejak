import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import Page from "./pages/page";
import PageError from "./page-error";
import Footer from "./footer/footer";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <Page when={data.isPage} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.2em;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
  }
  h1 {font-size: 40px; line-height: 47px; style: normal;}
  h2 {font-size: 32px; line-height: 37px; style: normal;}
  h3 {font-size: 28px; line-height: 34px; style: normal;}
  h4 {font-size: 24px; line-height: 29px; style: normal;}
  h5 {font-size: 20px; line-height: 24px; style: normal;}
  h6 {font-size: 16px; line-height: 19px; style: normal;}
  
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width:100%;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: row;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  // background-image: linear-gradient(
  //   180deg,
  //   rgba(66, 174, 228, 0.1),
  //   rgba(66, 174, 228, 0)
  // );

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: row;
    margin: auto;
  }
`;
