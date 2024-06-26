import { request } from 'utils/datoCMS';
import { getDailyDataQuery } from 'gql/daily';

import Flex from 'components/Flex/Flex';
import RoutineBox from 'components/Bll/RoutineBox';
import withLayout from 'hoc/withLayout';
// import { usePersistedState } from '@dannyman/use-store';

const Daily = ({ routine, ...props }) => {
  console.dir(routine)
  return (<>
    <Flex>
      <h1>Hola, Danny!</h1>
      <h3>Hoy es Lunes {(new Date()).toLocaleDateString()} &#127774;</h3>
      <p>{routine.description}</p>
      <RoutineBox
        routine={routine.day1} />
    </Flex>
  </>);
};

export const getServerSideProps = async (context) => {
  const { day } = context.params;

  const data = await request({
    query: getDailyDataQuery(day),
    variables: { id: 'fMkWUtqq5LQNSparIqgNmXhkDLw1' }
  });

  return {
    props: {
      routine: data?.user?.routine
    },
  }
};

export default withLayout(Daily);
