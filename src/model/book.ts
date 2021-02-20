import { IAuthor } from './author';

export interface IBook {
    isbn: string;
    authors: IAuthor[];
    name: string;
    price: number;
    quantity: number;
}
