'use client';

import Card from '../components/card.jsx'
import { Title, align } from '../components/title.jsx';
import Button from '../components/button.jsx'
import LikeButton from '@/components/LikeButton';
import { useQuotes } from './QuotesContext.js';

export default function Home() {
  const {
    currentQuoteIndex,
    quotesWithLikes,
    handleNextQuote,
    handlePreviousQuote,
    handleLike,
  } = useQuotes();


  return (
    <main className='min-h-dvh flex items-center justify-center bg-slate-600'>
      <Card>
        <Title label={quotesWithLikes[currentQuoteIndex].quote} align={align.center} />
        <span className='text-end block text-slate-600'>
          {quotesWithLikes[currentQuoteIndex].author}
        </span>
        <div className='flex gap-5 mt-8'>
          <Button onClick={handlePreviousQuote} className={`bg-slate-400 p-2 hover:bg-slate-500 shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75`}>
            Previous Quote
          </Button>

          <Button onClick={handleNextQuote}
            className={`bg-slate-400 p-2 hover:bg-slate-500 active:bg-slate-600 shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75`}>
            Next Quote
          </Button>

        </div>
        <div className='text-end pt-4'>
          <LikeButton onClick={handleLike} >
          </LikeButton>
        </div>
      </Card>
    </main>

  );
}
