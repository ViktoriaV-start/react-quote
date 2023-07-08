import { useEffect, useState } from "react";

import { useFetching } from "./hooks/useFetching";
import { GetDataService } from "./api/GetDataService";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Information } from "./components/Information";
import { BACKGROUND_COLOR } from "./config/constants";


export const App = () => {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [background, setBackground] = useState('');

  const {
    fetching,
    isLoading,
    error,
  } = useFetching(async () => {
    const result = await GetDataService.getData();

    if (result) {
      const quote = result.getElementsByTagName("quoteText");
      const author = result.getElementsByTagName("quoteAuthor");
      setQuote(quote?.[0].innerHTML);
      setAuthor(author?.[0].innerHTML)
      setBackground(getBackground());
    }
  });

  const getBackground = () => {
      const colorCount = BACKGROUND_COLOR.length;

      if(!background) return BACKGROUND_COLOR[0];
      
      const idx = BACKGROUND_COLOR.indexOf(background);
      if(idx === (colorCount-1)) return BACKGROUND_COLOR[0];
  
      return BACKGROUND_COLOR[idx+1];
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className={background}>
      <Header />
      <Content quote={quote} author={author} fetching={fetching} />
      <Information error={error} isLoading={isLoading} />
      <div className="empty"></div>
    </div>
  );
}
