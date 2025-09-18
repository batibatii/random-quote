'use client';

import Card from '../components/Card.jsx'
import { Title, align } from '../components/Title.jsx';
import Button from '../components/Button.jsx'
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
    <main className='min-h-dvh flex items-center justify-center bg-background'>
      <Card>
        <Title label={quotesWithLikes[currentQuoteIndex].quote} align={align.center} />
        <span className='text-end dark:text-primary block '>
          {quotesWithLikes[currentQuoteIndex].author}
        </span>
        <div className='flex gap-5 mt-8 ml-3 md:ml-0'>
          <Button onClick={handlePreviousQuote} className={`bg-secondary dark:bg-primary dark:text-primary-foreground  hover:bg-secondary/80 shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75`}>
            Previous Quote
          </Button>

          <Button onClick={handleNextQuote}
            className={`bg-secondary dark:bg-primary dark:text-primary-foreground   hover:bg-secondary/80 active:bg-secondary/60  shadow-lg hover:shadow-xl active:shadow-sm active:scale-95 active:translate-y-0.5 transition-all duration-75`}>
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
