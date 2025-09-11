'use client'

import { createContext, useState, useContext } from 'react';
import { quotes as quotesArray } from '../../quotes';

const QuotesContext = createContext([]);

export const QuoteIndex = ({ children }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [quotesWithLikes, setCurrentQuoteLike] = useState([...quotesArray])


  function handleNextQuote() {
    console.log('The button is clicked');
    console.log('The next quote is:', quotesArray[currentQuoteIndex].quote);

    const newIndex = currentQuoteIndex < quotesArray.length - 1 ? currentQuoteIndex + 1 : currentQuoteIndex;
    setCurrentQuoteIndex(newIndex);

  }

  function handlePreviousQuote() {
    console.log('The button is clicked');
    console.log('The previous quote is', quotesArray[currentQuoteIndex - 1]?.quote || quotesArray[currentQuoteIndex].quote);

    const newIndex = currentQuoteIndex > 0 ? currentQuoteIndex - 1 : currentQuoteIndex;
    setCurrentQuoteIndex(newIndex);

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

  const value = {
    currentQuoteIndex,
    quotesWithLikes,
    handleNextQuote,
    handlePreviousQuote,
    handleLike,
  };

  return (
    <QuotesContext.Provider value={value}>
      {children}
    </QuotesContext.Provider>
  );
};

export const useQuotes = () => {
  const context = useContext(QuotesContext);
  return context;
};