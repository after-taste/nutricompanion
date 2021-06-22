import { request } from 'utils/datoCms';

import Flex from 'components/Flex/Flex';
import Meal from 'components/Custom/Meal';
import withLayout from 'hoc/withLayout';

const Week = ({ data }) => {
  console.dir(data);

  const diario = (eatingPlan) => {
    const desayuno = { tiempo: 'Desayuno', plan: eatingPlan.desayuno };
    const meriendaMaAna = { tiempo: 'Merienda', plan: eatingPlan.meriendaMaAna };
    const almuerzo = { tiempo: 'Almuerzo', plan: eatingPlan.almuerzo };
    const meriendaTarde = { tiempo: 'Merienda', plan: eatingPlan.meriendaTarde };
    const cena = { tiempo: 'Cena', plan: eatingPlan.cena };
    const meriendaNoche = { tiempo: 'Merienda', plan: eatingPlan.meriendaNoche };

    return [
      desayuno,
      meriendaMaAna,
      almuerzo,
      meriendaTarde,
      cena,
      meriendaNoche
    ];
  };

  const semanal = data.paciente.dieta.map((dieta, index) => ({
    diaDeLaSemana: dieta.diaDeLaSemana,
    caloriasDiarias: dieta.planAlimenticio.caloriasDiarias,
    eatingPlan: diario(dieta.planAlimenticio)
  }));

  return (<>
    <h1>Hola, {data.paciente.nombre}!</h1>

    {semanal.map((dieta, index) => (
      <Flex
        key={index}
        flexDirection="column">
        <h3>{dieta.diaDeLaSemana}</h3>
        <p>Calorias a consumir: {dieta.caloriasDiarias}</p>
        {dieta.eatingPlan &&
          dieta.eatingPlan.map((plan, index) => plan?.plan.length ?
            <Meal
              mealTime={plan.tiempo}
              eatingPlan={plan.plan}
              key={index} />
            :
            null
          )
        }
      </Flex>
    ))}
  </>);
};

export const query = `
query WeekPageQuery($id: String){
  paciente(filter: {cDula: {eq: $id}}){
    nombre
    dieta {
      diaDeLaSemana
      planAlimenticio {
        caloriasDiarias
        desayuno {
          ...menu
        }
        meriendaMaAna {
          ...menu
        }
        almuerzo {
          ...menu
        }
        meriendaTarde {
          ...menu
        }
        cena {
          ...menu
        }
        meriendaNoche {
          ...menu
        }
      }
    }
  }
}

fragment menu on MenuRecord {
  ejemplo
  cantidad
  alimento {
    nombre
    intercambios
  }
}
`;

export const getServerSideProps = async (context) => {
  const data = await request({
    query: query,
    variables: { id: '603890925' }
  });

  return {
    props: {
      data
    },
  }
};

export default withLayout(Week);
