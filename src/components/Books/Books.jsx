import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import Spinner from '../Spinner/Spinner';

const Books = () => {
    const { books } = useLoaderData()
    const navigation=useNavigation()
    if (navigation.state=== 'loading') {
        return <Spinner></Spinner>
    }
    // console.log(books)
    return (
        <div className='my-container'>
           <div className='grid gap-8 mb-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    books.map(book =><Book
                    key={books.isbn13}
                    book={book}
                    ></Book> )
                }
            </div>

        </div>
    );
};

export default Books;