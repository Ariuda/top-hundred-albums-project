export interface Album {
    id: string;
    title: string, 
    artist: { 
        name: string, 
        url: { 
            href: string; 
          }
    };
    image: string;
}