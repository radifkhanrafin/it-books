import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    
    // console.log(book)
    return (
        <Link to={`../book/${book.isbn13}`}>
            <div className='relative hover:rounded-lg overflow-hidden transition duration-200 transform hover:-translate-y-2'>
                <img className='object-cover w-full h-full md:h-64 xl:h-80' src={book.image} alt="" />
                <div className='bg-black bg-opacity-75 opacity-0 hover:rounded-lg hover:opacity-100 text-white absolute  flex flex-col px-6 shadow-lg py-8 inset-0 transition duration-200 transform hover:-translate-y-2'>
                    <p>{book.title}</p> <br />
                    <p>{book.subtitle.substring(0, 150)}...</p> <br />
                    <p className='mt-auto'> Price : {book.price}</p> <br />

                </div>
            </div>
        </Link>
    );
};

export default Book;