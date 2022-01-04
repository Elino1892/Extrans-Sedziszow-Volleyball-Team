import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {

  return (
    <>
      <div className="news-bgc">
      </div>
      <section className="news">

        {
          news.map(newsItem =>
            <NewsItem
              key={newsItem.id}
              id={newsItem.id}
              title={newsItem.title}
              description={newsItem.description}
              background={newsItem.background}
              author={newsItem.author}
              createdAt={newsItem.createdAt}
            />
          )
        }

      </section>
    </>
  )
}

export default NewsList;