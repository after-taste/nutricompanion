const getDailyData = `query getDailyData($id: String) {
    user(filter: {firebaseUid: {eq: $id}}) {
        routine {
            description
            day1 {
                repetitions
                sets
                exercise {
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
                    }
                }
            }
        }
    }
}`;

export { getDailyData };