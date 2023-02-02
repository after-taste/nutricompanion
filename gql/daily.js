const exerciseFragment = `
    name
    description
    machine {
      name
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

const getAllRoutines = `query getDailyDataQuery($id: String) {
    user(filter: {firebaseUid: {eq: $id}}) {
        routine {
            day1 {
              __typename
            }
            day2 {
              __typename
            }
            day3 {
              __typename
            }
            day4 {
              __typename
            }
            day5 {
              __typename
            }
            day6 {
              __typename
            }
            day7 {
              __typename
            }
        }
    }
}`;

export {
  getDailyDataQuery,
  getAllRoutines,
};