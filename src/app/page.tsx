'use client';

import Card from '../components/Card'
import { Title, TextAlign } from '../components/Title';
import LikeButton from '@/components/LikeButton';
import { useQuotes } from './QuotesContext';
import { Button } from '@/components/ui/button';

export default function Home() {
  const {
    currentQuoteIndex,
    quotesWithLikes,
    handleNextQuote,
    handlePreviousQuote,
    handleLike,
  } = useQuotes();


  return (
    <main className='min-h-dvh flex items-center justify-center bg-background'>
      <Card>
        <Title label={quotesWithLikes[currentQuoteIndex].quote} align={TextAlign.CENTER} />
        <span className='text-end dark:text-primary block '>
          {quotesWithLikes[currentQuoteIndex].author}
        </span>
        <div className='flex gap-5 mt-8 ml-3 md:ml-0'>
          <Button onClick={handlePreviousQuote} className={`bg-secondary dark:bg-primary dark:text-primary-foreground  hover:bg-secondary/80 shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75 rounded-lg p-2 md:p-3 mt-4 w-32 md:mt-0 md:w-60 cursor-pointer `}>
            Previous Quote
          </Button>

          <Button onClick={handleNextQuote}
            className={`bg-secondary dark:bg-primary dark:text-primary-foreground   hover:bg-secondary/80 active:bg-secondary/60  shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75 rounded-lg p-2 md:p-3 mt-4 w-32 md:mt-0 md:w-60 cursor-pointer `}>
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
