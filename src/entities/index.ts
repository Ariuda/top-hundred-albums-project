export interface Album {
    id: string;
    link: string;
    title: string, 
    artist: { 
        name: string, 
        link?: string,
    };
    image: string;
    price: string;
    category: {
        name: string;
        link: string;
    };
    numberOfItems: string;
    releaseDate: string;
    rights: string;
    index: number;
};