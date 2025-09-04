'use client';

import { quotes } from '../../quotes';
import { Children, useState } from 'react';
import Card from '../components/card.jsx'
import { Title, align } from '../components/title.jsx';
import Button from '../components/button.jsx'

export default function Home() {

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [quotesWithLikes, setCurrentQuoteLike] = useState(quotes.map(quote => quote))

  function handleSubmit() {
    console.log('The button is clicked');
    console.log('The next quote is:', quotes[currentQuoteIndex].quote);

    setCurrentQuoteIndex((prev) => prev < quotes.length - 1 ? prev + 1 : prev);
  }

  function handlePreviousQuote() {
    console.log('The button is clicked');
    console.log('The previous quote is', quotes[currentQuoteIndex - 1]?.quote || quotes[currentQuoteIndex].quote);

    setCurrentQuoteIndex((prev) => prev > 0 ? prev - 1 : prev);
  }

  function handleLike() {

    console.log('Quote:', `"${quotesWithLikes[currentQuoteIndex].quote}"`, 'is liked');

    const incrementedQuote = quotesWithLikes.map((quote, index) => {
      if (index === currentQuoteIndex) {
        console.log('This quote has: ', quote.likeCount + 1, ' likes');
        setShowText(true);
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
          <Button onClick={handlePreviousQuote} className={`bg-slate-400 p-2 hover:bg-slate-500 shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75`}>
            Previous Quote
          </Button>
          <Button onClick={handleLike}
            className={`bg-lime-600 hover:bg-lime-700 active:bg-lime-800 shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75`}>
            Like
          </Button>
          <Button onClick={handleSubmit}
            className={`bg-slate-400 p-2 hover:bg-slate-500 active:bg-slate-600 shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75`}>
            Next Quote
          </Button>

        </div>
        {showText && (
          <div className='bg-lime-900 text-center mt-4 mx-auto rounded-lg font-bold w-8 shadow-inner border-2 border-lime-800'>{quotesWithLikes[currentQuoteIndex].likeCount}</div>)}
      </Card>
    </main>

  );
}
