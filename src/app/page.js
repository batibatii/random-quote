'use client';

import { quotes } from '../../quotes';
import { useState } from 'react';
import Card from '../components/card.jsx'
import { Title, align } from '../components/title.jsx';

export default function Home() {

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quotesWithLikes, setCurrentQuoteLike] = useState(quotes.map(quote => quote))


  function handleSubmit() {
    console.log('The button is clicked');
    console.log('The next quote is:', quotes[currentQuoteIndex].quote);

    setCurrentQuoteIndex((prev) => prev + 1);
  }

  function handleLike() {


    console.log('Quote:', `"${quotesWithLikes[currentQuoteIndex].quote}"`, 'is liked');

    const incrementedQuote = quotesWithLikes.map((quote, index) => {
      if (index === currentQuoteIndex) {
        console.log('This quote has: ', quote.likeCount + 1, ' likes');
        return { ...quote, likeCount: quote.likeCount + 1 }
      } else {
        return quote;
      }
    })

    setCurrentQuoteLike(incrementedQuote);
  }

  return (
    <main className='min-h-dvh flex items-center justify-center bg-slate-600'>
      <Card>
        <Title label={quotes[currentQuoteIndex].quote} align={align.center} />
        <span className='text-end block text-slate-600'>
          {quotes[currentQuoteIndex].author}
        </span>
        <div className='flex gap-5 mt-8'>
          <button onClick={handleSubmit}
            className='bg-slate-400 rounded-lg p-2 w-2xs hover:bg-slate-500 '>
            Next quote
          </button>

          <button onClick={handleLike}
            className='bg-lime-600 rounded-lg w-2xs hover:bg-lime-700 '>
            Like
          </button>
        </div>
      </Card>
    </main>

  );
}
