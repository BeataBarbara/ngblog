export enum Tags {
Hair= 'Włosy',
Fry= 'Smażenie',
Soap= 'Mydło',
Recomend = 'Wyjątkowy!',
Face= 'Twarz',
}

export interface MyPost {
    id?: number;
    title: string;
    text: string;
    tags?: Tags [   ];
    date: Date;
}
