import React, { useState } from 'react';
import { useLoaderData , useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Book_Details = () => {
    const book = useLoaderData()
    const { authors, desc, error, image, isbn10, isbn13, language, publisher, pages, price, rating, subtitle, title, url, year } = book
    const [fold, setFold] = useState(true)
    // console.log(book)

    const navigation=useNavigation()
    if (navigation.state=== 'loading') {
        return <Spinner></Spinner>
    }
    return (
        <div className='w-full md:w-1/2 lg:w-3/4 mx-auto md:mt-28 '>

            <div className='flex flex-col md:flex-row justify-center items-start shadow-2xl rounded-lg mt-8 p-4'>

                <img className='object-cover w-full lg:w-1/2 lg:-mt-16 h-full' src={book.image} alt="" />

                <div className='md:w-[450px] font-semibold'>

                    <div className='-mb-5 '>
                        <p className='badge'>Brand New</p>
                    </div>

                    <h2 className='text-2xl mb-2 font-extrabold'>{title}</h2>
                    <p className=' mb-2'>Authors : {authors}</p>
                    <p className=' mb-2'>Publisher : {publisher}</p>
                    <p className=' mb-2'>Year : {year}</p>
                    <p className=' mb-2'>Rating : {rating}</p>
                    <div className='h-40 overflow-y-scroll'>
                        {fold ? <>
                            <p >{desc.substring(0, 150)}</p>
                            <span className='text-blue-800 cursor-pointer' onClick={() => setFold(!fold)}>read more</span>
                        </>
                            : <>
                                <p className='text-slate-400'>{desc}</p> <span className='text-blue-800 cursor-pointer' onClick={() => setFold(!fold)}>Readd less</span>
                            </>

                        }
                    </div>
                    <div className='flex items-center justify-start gap-20  my-5'>
                        <button className='btn px-8'>Buy now</button>
                        <h4>Price : {price}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book_Details;