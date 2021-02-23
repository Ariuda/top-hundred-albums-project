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

export const scrollTo = (target: HTMLElement) => {

    const supportSmoothScroll = 'scrollBehavior' in document.documentElement.style;

    const targetCoords = target.getBoundingClientRect();

    if (supportSmoothScroll) {
        window.scrollTo({
            left: targetCoords.left + window.pageXOffset,
            top: targetCoords.top + window.pageYOffset,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo(0, 0);
    }
};