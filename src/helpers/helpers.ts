export const limitCharacters = (str: string) => {
    const max = 25;
    let counter = 0;
    const formattedStr: string[] = [];

    const splitStr = str.split(' ');
    for (let str of splitStr) {
        if (counter < max && counter + str.split('').length < max) {
            formattedStr.push(str);
            counter += str.split('').length;
        } else if (counter < max && counter + str.split('').length > max) {
            formattedStr.push('...');
            break;
        }
    };
    return formattedStr.join(' ');
};