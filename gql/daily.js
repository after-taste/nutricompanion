const exerciseFragment = `
    name
    description
    machine {
      image {
        url
      }
      description
    }
    howTo {
      url
    }`;

const dayFragment = `__typename
... on MultiSetRecord {
    multiSet {
      repetitions
      exercise {
        ${exerciseFragment}
      }
      sets
    }
  }
  ... on SetRecord {
    repetitions
    exercise {
        ${exerciseFragment}
    }
    sets
  }
`;

const getDailyDataQuery = (day) => `query getDailyDataQuery($id: String) {
    user(filter: {firebaseUid: {eq: $id}}) {
        routine {
            description
            ${day} {
                ${dayFragment}
            }
        }
    }
}`;

export { getDailyDataQuery };