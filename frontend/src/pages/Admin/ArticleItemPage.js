import { useEffect } from "react";
import { useParams } from "react-router";
import ArticleItem from "../../components/News/ArticleItem.js/ArticleItem";

import bgc1 from "../../images/268437504_261248222659880_4987107035931412424_n.jpg"

const dummyNewsItem = {

  'id': 1,
  'title': 'W nienajlepszych nastrojach spędzimy przerwę świąteczną...',
  'subtitle': 'To był ostatni mecz w tym roku. Zespół Sędziszowa Małopolskiego musiał uznać wyższość niżej notowanego beniaminka Mosiru Dębica. Mecz zakończył się wynikiem 1:3.',
  'description': ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?'],
  'background': bgc1,
  'author': 'Marcin Marciniak',
  'createdAt': 'poniedziałek, 03 stycznia 2022 | 14:00',

}

const ArticleItemPage = () => {

  const params = useParams();
  const { articleId } = params;

  useEffect(() => {
    document.title = dummyNewsItem.title
  }, [])

  return (
    <ArticleItem
      // id={dummyNewsItem.id}
      title={dummyNewsItem.title}
      subtitle={dummyNewsItem.subtitle}
      description={dummyNewsItem.description}
      background={dummyNewsItem.background}
      author={dummyNewsItem.author}
      createdAt={dummyNewsItem.createdAt}
    />
  )
}

export default ArticleItemPage;