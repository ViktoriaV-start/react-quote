import { useEffect, useState } from "react";

import { useFetching } from "./hooks/useFetching";
import { GetDataService } from "./api/GetDataService";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Information } from "./components/Information";
import { backgroundColor } from "./config/constants";


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
      getBackground();
    }
  });

  const getRand = () => {
    const rand = Math.floor(Math.random()*(backgroundColor.length));
    return rand;
  };

  const getBackground = () => {
    let rand = getRand();
    setBackground((prev) => {
      while (prev === backgroundColor[rand]) {
        rand = getRand();
      };
      return backgroundColor[rand];
    })
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
