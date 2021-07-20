export const isBrowser = (typeof window !== 'undefined');

export const arrayMock = (length = 0) => {
    let arr = [];

    for (let index = 0; index < length; index++) {
        arr.push(index);
    }

    return arr;
};

export const endsWithVowel = (str) => ['a', 'e', 'i', 'o', 'u'].some(vowel => str.endsWith(vowel));
