import React from 'react';
import { graphql } from 'gatsby';

import Diario from '@blocks/PlanAlimenticio/Diario';

import '@pages/index.scss';

export default ({ data }) => {
  console.dir(data);


  const diario = (planAlimenticio) => {
    const desayuno = { tiempo: 'Desayuno', plan: planAlimenticio.desayuno };
    const meriendaMaAna = { tiempo: 'Merienda', plan: planAlimenticio.meriendaMaAna };
    const almuerzo = { tiempo: 'Almuerzo', plan: planAlimenticio.almuerzo };
    const meriendaTarde = { tiempo: 'Merienda', plan: planAlimenticio.meriendaTarde };
    const cena = { tiempo: 'Cena', plan: planAlimenticio.cena };
    const meriendaNoche = { tiempo: 'Merienda', plan: planAlimenticio.meriendaNoche };

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
    planAlimenticio: diario(dieta.planAlimenticio)
  }));


  return (
    <React.Fragment>
      <h1>Hola, {data.datoCmsPaciente.nombre}!</h1>

      {semanal.map((dieta, index) => (
        <Diario
          diaDeLaSemana={dieta.diaDeLaSemana}
          caloriasDiarias={dieta.caloriasDiarias}
          planAlimenticio={dieta.planAlimenticio}
          key={index} />
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
