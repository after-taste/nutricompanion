import { request } from 'utils/datoCMS';
import { getAllRoutines, getDailyDataQuery } from 'gql/daily';

const dias = [
    {
        id: 'day1',
        label: 'Día 1',
        url: '/daily/day1'
    },
    {
        id: 'day2',
        label: 'Día 2',
        url: '/daily/day2'
    },
    {
        id: 'day3',
        label: 'Día 3',
        url: '/daily/day3'
    },
    {
        id: 'day4',
        label: 'Día 4',
        url: '/daily/day4'
    },
    {
        id: 'day5',
        label: 'Día 5',
        url: '/daily/day5'
    },
    {
        id: 'day6',
        label: 'Día 6',
        url: '/daily/day6'
    },
    {
        id: 'day7',
        label: 'Día 7',
        url: '/daily/day7'
    },
];

export const getAvailableRoutines = async (userId) => {
    const data = await request({
        query: getAllRoutines,
        variables: { id: userId }
    });

    return dias.filter((d) => {
        const dailyData = data?.user?.routine[d.id];
        return dailyData.length > 0;
    });
};


export const getDayRoutine = async (userId, day) => {
    const data = await request({
        query: getDailyDataQuery(day),
        variables: { id: userId }
    });

    return {
        description: data?.user?.routine.description,
        routine: data?.user?.routine[day],
    }
};
