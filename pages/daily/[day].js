import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Flex from 'components/Flex/Flex';
import RoutineBox from 'components/Bll/RoutineBox';
import UserWelcome from 'components/Bll/UserWelcome';
import P from 'components/Text/P';
import withLayout from 'hoc/withLayout';
import { getDayRoutine } from 'services/bll';

const Daily = ({ user, description, ...props }) => {
  const router = useRouter();
  const { day } = router.query;

  const [routine, setRoutine] = useState(null);

  const loadData = async () => {
    const data = await getDayRoutine(user.uid, day);
    setRoutine(data);
  };

  useEffect(() => {
    if (user?.uid && day) {
      loadData();
    }
  }, [user, day]);

  return (<>
    <Flex>
      <UserWelcome
        showClock
        user={user} />
      <P
        align="justify">
        {routine?.description}
      </P>
      <RoutineBox
        routine={routine?.routine} />
    </Flex>
  </>);
};

export default withLayout(Daily);
