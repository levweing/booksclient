import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/services/books.service';
import { IBook } from 'src/model/book';
import { IAuthor } from 'src/model/author';

@Component({selector: "app-basket", templateUrl: "./basket.component.html"})
export class BasketComponent {
    constructor(private booksService: BooksService) {
    }

    getBooks(): IBook[] {
        return this.booksService.basket;
    }

    removeFromBasket(book: IBook): void {
        this.booksService.removeFromBasket(book);
    }

    formatAuthors(authors: IAuthor[]): string {
        const result =
            authors.map(v => `${v.firstName} ${v.lastName}`).join(", ");
        
        return result;
    }

    orderBooks(): void {
        this.booksService.orderBooks();
    }
}
