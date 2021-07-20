// import { request } from 'utils/datoCMS';

import Flex from 'components/Flex/Flex';
import withLayout from 'hoc/withLayout';
// import { usePersistedState } from '@dannyman/use-store';

const Home = ({ ...props }) => {

  return (<>
    <Flex>
      <h1>Hola, Danny!</h1>
      <h3>Hoy es Lunes {(new Date()).toLocaleDateString()} &#127774;</h3>
      <p>Spicy jalapeno bacon ipsum dolor amet tri-tip turkey chicken buffalo meatloaf, beef ribs ground round chislic. Strip steak cupim ham chuck, cow turducken ribeye venison filet mignon ball tip meatloaf leberkas chicken porchetta. Hamburger pork belly tenderloin chicken capicola meatball shoulder ribeye buffalo. Kielbasa pork belly beef t-bone buffalo alcatra pork chop andouille. Short ribs pancetta ground round boudin turducken, chuck rump t-bone tenderloin.</p>
      {/* TODO: Render actual plan */}
    </Flex>
  </>);
};

// const query = `
// query HomePageQuery($id: String) {}
// `;

export const getServerSideProps = async (context) => {
  // const data = await request({
  //   query: query,
  //   variables: {}
  // });

  return {
    props: {
      // data
    },
  }
};

export default withLayout(Home);
