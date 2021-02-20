export interface Album {
    id: string;
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
    }
    index: number;
}