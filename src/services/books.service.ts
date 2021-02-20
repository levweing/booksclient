import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IBook } from 'src/model/book';

@Injectable()
export class BooksService {
    basket: IBook[] = [];

    constructor(@Inject("BOOKS_URL") private booksUrl: string,
        @Inject("ORDER_URL") private orderBooksUrl: string,
        private httpClient: HttpClient) {

    }

    getBooks(): Promise<IBook[]> {
        const headers: any = {Authorization: sessionStorage.jwt};
        const obs = this.httpClient.get<IBook[]>(this.booksUrl, {headers});
        const result = obs.toPromise();

        return result;
    }

    addToBasket(book: IBook): void {
        this.basket = [...this.basket, book];
    }

    removeFromBasket(book: IBook): void {
        this.basket = this.basket.filter(v => v.isbn != book.isbn);
    }

    isInBasket(book: IBook): boolean {
        const result = this.basket.includes(book);

        return result;
    }

    orderBooks(): Promise<boolean> {
        const body =
            this.basket.reduce((acc, v) => acc = {...acc, [v.isbn]: 1}, {});
        
        const headers: any = {Authorization: sessionStorage.jwt};
        const obs = this.httpClient.post(this.orderBooksUrl, body, {headers});
        const pr = obs.toPromise().then(console.log);

        return null;
    }
}
