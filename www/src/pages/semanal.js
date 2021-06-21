import React from 'react';
import { graphql } from 'gatsby';

import Flex from '@components/Flex/Flex';
import Meal from '@components/Custom/Meal';

import '@pages/index.scss';

export default ({ data }) => {
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

  const semanal = data.datoCmsPaciente.dieta.map((dieta, index) => ({
    diaDeLaSemana: dieta.diaDeLaSemana,
    caloriasDiarias: dieta.planAlimenticio.caloriasDiarias,
    eatingPlan: diario(dieta.planAlimenticio)
  }));

  return (
    <React.Fragment>
      <h1>Hola, {data.datoCmsPaciente.nombre}!</h1>

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
    </React.Fragment>
  );
};

export const query = graphql`
query {
  datoCmsPaciente(cDula: {eq: "603890925"}){
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

fragment menu on DatoCmsMenu {
  ejemplo
  cantidad
  alimento {
    nombre
    intercambios
  }
}
`;
