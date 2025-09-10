'use client'

import { createContext, useState, useContext } from 'react';
import { quotes as quotesArray } from '../../quotes';

const QuotesContext = createContext([]);

export const QuoteIndex = ({ children }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [quotesWithLikes, setCurrentQuoteLike] = useState([...quotesArray])
  const [likeIconFillColor, setLikeIconFillColor] = useState('#e2e8f0');
  const [likeIconStrokeColor, setLikeIconStrokeColor] = useState('#334155');

  function handleNextQuote() {
    console.log('The button is clicked');
    console.log('The next quote is:', quotesArray[currentQuoteIndex].quote);

    const newIndex = currentQuoteIndex < quotesArray.length - 1 ? currentQuoteIndex + 1 : currentQuoteIndex;
    setCurrentQuoteIndex(newIndex);

    if (quotesWithLikes[newIndex].likeCount > 0) {
      setLikeIconFillColor('red');
      setLikeIconStrokeColor('red');
    } else {
      setLikeIconFillColor('#e2e8f0');
      setLikeIconStrokeColor('#334155');
    }
  }

  function handlePreviousQuote() {
    console.log('The button is clicked');
    console.log('The previous quote is', quotesArray[currentQuoteIndex - 1]?.quote || quotesArray[currentQuoteIndex].quote);

    const newIndex = currentQuoteIndex > 0 ? currentQuoteIndex - 1 : currentQuoteIndex;
    setCurrentQuoteIndex(newIndex);

    if (quotesWithLikes[newIndex].likeCount > 0) {
      setLikeIconFillColor('red');
      setLikeIconStrokeColor('red');
    } else {
      setLikeIconFillColor('#e2e8f0');
      setLikeIconStrokeColor('#334155');
    }
  }

  function handleLike() {

    setLikeIconFillColor('red')
    setLikeIconStrokeColor('red')

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
    likeIconFillColor,
    likeIconStrokeColor,
    handleNextQuote,
    handlePreviousQuote,
    handleLike,
    quotesArray
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