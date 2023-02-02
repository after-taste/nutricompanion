import { useEffect } from 'react';
import withLayout from 'hoc/withLayout';
import Flex from 'components/Flex/Flex';
import RoutineList from 'components/Bll/RoutineList';
import UserWelcome from 'components/Bll/UserWelcome';
import StandardImageList from 'components/Image/ImageList';
import P from 'components/Text/P';
import { dummyImages } from 'mocks/images';

const copy = {
  imageListTitle: 'Fotos del dia',
  body: 'El aumento del flujo sanguíneo eleva los niveles de oxígeno en su cuerpo. Esto ayuda a bajar el riesgo de enfermedades del corazón como el colesterol alto, la enfermedad arterial coronaria y el ataque al corazón. El ejercicio regular también puede reducir la presión arterial y los niveles de triglicéridos.',
};

const Home = ({ user, ...props }) => {

  return (<>
    <Flex>
      <UserWelcome
        user={props.user} />
      <P>
        {copy.body}
      </P>
      <RoutineList
        user={user} />
      <StandardImageList
        title={copy.imageListTitle}
        images={dummyImages} />
    </Flex>
  </>);
};

// const query = `
// query HomePageQuery($id: String) {}
// `;

export const getServerSideProps = async (context) => {
  // const data = await request({
  //   query: getThemeQuery,
  //   variables: {}
  // });

  return {
    props: {
      heroImages: dummyImages
    },
  }
};

export default withLayout(Home);
