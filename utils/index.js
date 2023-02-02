export const isBrowser = (typeof window !== 'undefined');

export const arrayMock = (length = 0) => {
    let arr = [];

    for (let index = 0; index < length; index++) {
        arr.push(index);
    }

    return arr;
};

export const endsWithVowel = (str) => ['a', 'e', 'i', 'o', 'u'].some(vowel => str.endsWith(vowel));

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const isTheSameObject = (object1, object2) => {
    const values1 = Object.values(object1).sort();
    const values2 = Object.values(object2).sort();
    const parsedObject1 = JSON.stringify(values1);
    const parsedObject2 = JSON.stringify(values2);

    return parsedObject1 === parsedObject2;
};
