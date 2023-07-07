
export const Content = ({ quote, author, fetching }) => {

  return (
    <>
    <main className="content">
      <header className="content__header">Случайная цитата</header>
      {quote && <div className="content__text">{quote}</div>}
      {author && <div className="content__author">{author}</div>}
      <button type="button"
              className="content__btn"
              onClick={fetching}
      >
        Новая цитата
      </button>
    </main>
    </>
  )
}
