import { OnInit, Component, Input } from '@angular/core';

import { BooksService } from 'src/services/books.service';
import { IBook } from 'src/model/book';
import { IAuthor } from 'src/model/author';

@Component({selector: "app-books-table",
    templateUrl: "./books-table.component.html"})
export class BooksTableComponent implements OnInit {
    books: IBook[];
    error: any;

    constructor(private booksService: BooksService) {
    }

    ngOnInit(): void {
        const pr = this.booksService.getBooks();

        pr.then(v => this.books = v, e => this.error = e);
    }

    formatAuthors(authors: IAuthor[]): string {
        const result =
            authors.map(v => `${v.firstName} ${v.lastName}`).join(", ");
        
        return result;
    }

    addToBasket(book: IBook): void {
        this.booksService.addToBasket(book);
    }

    removeFromBasket(book: IBook): void {
        this.booksService.removeFromBasket(book);
    }

    isInBasket(book: IBook): boolean {
        const result = this.booksService.isInBasket(book);

        return result;
    }
}
