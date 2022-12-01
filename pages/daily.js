// import { request } from 'utils/datoCMS';

import Flex from 'components/Flex/Flex';
import RoutineBox from 'components/Bll/RoutineBox';
import withLayout from 'hoc/withLayout';
// import { usePersistedState } from '@dannyman/use-store';

const Daily = ({ ...props }) => {

  return (<>
    <Flex>
      <h1>Hola, Danny!</h1>
      <h3>Hoy es Lunes {(new Date()).toLocaleDateString()} &#127774;</h3>
      <RoutineBox />
    </Flex>
  </>);
};

// const query = `
// query HomePageQuery($id: String) {}
// `;

// export const getServerSideProps = async (context) => {
  // const data = await request({
  //   query: query,
  //   variables: {}
  // });

  // return {
  //   props: {
  //     data
  //   },
  // }
// };

export default withLayout(Daily);
