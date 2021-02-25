import { Album } from "../../entities";

export const testData: Album = {
        id: '123',
        link: 'link',
        title: 'title 1',
        artist: {
            name: 'name 1',
            link: 'link-one',
        },
        image: 'image-one',
        price: 'price-one',
        category: {
            name: 'category',
            link: 'category-link'
        },
        numberOfItems: '8',
        releaseDate: 'release-date',
        rights: 'rights-data',
        index: 1,
        favorite: false  
    };