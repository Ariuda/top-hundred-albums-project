export const limitCharacters = (str: string, max: number = 25) => {
    let counter = 0;
    const formattedStr: string[] = [];

    const splitStr = str.split(' ');
    for (let str of splitStr) {
        if (counter < max && counter + str.length <= max) {
            formattedStr.push(str);
            counter += str.length;
        } else if (counter <= max && counter + str.length > max) {
            formattedStr.push('...');
            break;
        } 
    };
    return formattedStr.join(' ');
};