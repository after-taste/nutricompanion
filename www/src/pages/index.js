import React from 'react';
import { graphql } from 'gatsby';

import Diario from '@blocks/PlanAlimenticio/Diario';

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

  const dieta = data.datoCmsPaciente.dieta.find(dieta => dieta.diaDeLaSemana === day);
  console.log(day, 'todays', dieta);

  const plan = dieta && {
    diaDeLaSemana: dieta.diaDeLaSemana,
    caloriasDiarias: dieta.planAlimenticio.caloriasDiarias,
    planAlimenticio: diario(dieta.planAlimenticio)
  };


  return (
    <React.Fragment>
      <h1>Hola, {data.datoCmsPaciente.nombre}!</h1>
      {plan ?
        <React.Fragment>
          <h3>Hoy es {plan.diaDeLaSemana} &#127774; {(new Date()).toLocaleDateString()}</h3>
          <p>Spicy jalapeno bacon ipsum dolor amet tri-tip turkey chicken buffalo meatloaf, beef ribs ground round chislic. Strip steak cupim ham chuck, cow turducken ribeye venison filet mignon ball tip meatloaf leberkas chicken porchetta. Hamburger pork belly tenderloin chicken capicola meatball shoulder ribeye buffalo. Kielbasa pork belly beef t-bone buffalo alcatra pork chop andouille. Short ribs pancetta ground round boudin turducken, chuck rump t-bone tenderloin.</p>
          <Diario
            planAlimenticio={plan.planAlimenticio}
            mostrarSelector
          />
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
