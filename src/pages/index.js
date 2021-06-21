import React from 'react';
import { graphql } from 'gatsby';

import Flex from '@components/Flex/Flex';
import Meal from '@components/Custom/Meal';

// import '@pages/index.scss';

const DAYS = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
];

export default ({ data }) => {
  console.dir(data);

  const day = 'Lunes';//DAYS[(new Date()).getDay()];

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

  const dieta = data.datoCmsPaciente.dieta.find(dieta => dieta.diaDeLaSemana === day);

  const plan = dieta && {
    diaDeLaSemana: dieta.diaDeLaSemana,
    caloriasDiarias: dieta.planAlimenticio.caloriasDiarias,
    eatingPlan: diario(dieta.planAlimenticio)
  };

  const handleMealDone = (info) => {
    console.log('Meal done', info)
  };

  return (
    <React.Fragment>
      <h1>Hola, {data.datoCmsPaciente.nombre}!</h1>
      {plan ?
        <React.Fragment>
          <h3>Hoy es {plan.diaDeLaSemana} &#127774; {(new Date()).toLocaleDateString()}</h3>
          <p>Spicy jalapeno bacon ipsum dolor amet tri-tip turkey chicken buffalo meatloaf, beef ribs ground round chislic. Strip steak cupim ham chuck, cow turducken ribeye venison filet mignon ball tip meatloaf leberkas chicken porchetta. Hamburger pork belly tenderloin chicken capicola meatball shoulder ribeye buffalo. Kielbasa pork belly beef t-bone buffalo alcatra pork chop andouille. Short ribs pancetta ground round boudin turducken, chuck rump t-bone tenderloin.</p>
          <Flex
            flexDirection="column">
            <h3>{plan.diaDeLaSemana}</h3>
            <p>Calorias a consumir: {plan.caloriasDiarias}</p>
            {plan.eatingPlan &&
              plan.eatingPlan.map((plan, index) => plan?.plan.length ?
                <Meal
                  key={index}
                  mealTime={plan.tiempo}
                  eatingPlan={plan.plan}
                  showCounter
                  showReadyButton
                  onReady={handleMealDone} />
                :
                null
              )
            }
          </Flex>
        </React.Fragment>
        :
        <React.Fragment>
          <p>No tienes plan para el dia de hoy :S</p>
        </React.Fragment>
      }

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
