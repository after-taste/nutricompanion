const getDailyData = `
query getDailyData($id: ItemId) {
    routine(filter: {id: {eq: $id}}) {

    }
}
`;