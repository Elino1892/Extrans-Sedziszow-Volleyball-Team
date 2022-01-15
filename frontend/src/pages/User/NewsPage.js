import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import NewsList from "../../components/News/NewsList/NewsList"
import { listNews } from "../../store/actions/newsActions"
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner"

// import bgc1 from "../../images/268437504_261248222659880_4987107035931412424_n.jpg"
// import bgc2 from "../../images/267728645_260641312720571_5759638841539975658_n.jpg"
// import bgc3 from "../../images/267742441_260641359387233_6497856279913374496_n.jpg"
// import bgc4 from "../../images/267939888_261017389349630_8832917883968479510_n.jpg"

// const dummyNews = [
//   {
//     'id': 1,
//     'title': 'W nienajlepszych nastrojach spędzimy przerwę świąteczną...',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc1,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'poniedziałek, 03 stycznia 2022 | 14:00',
//   },
//   {
//     'id': 2,
//     'title': 'Co raz bliżej święta!',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc3,
//     'author': 'Konrad Napiórkowski',
//     'createdAt': 'wtorek, 04 stycznia 2022 | 16:00',
//   },
//   {
//     'id': 3,
//     'title': 'Zapraszamy na ostatni mecz w 2021 roku',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc4,
//     'author': 'Patryk Polek',
//     'createdAt': 'środa, 05 stycznia 2022 | 17:00',
//   },
//   {
//     'id': 4,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
//   {
//     'id': 5,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
//   {
//     'id': 6,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
//   {
//     'id': 7,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
//   {
//     'id': 8,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
//   {
//     'id': 9,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
//   {
//     'id': 10,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
//   {
//     'id': 11,
//     'title': 'Galeria z sobotniego pojedynku z MKS "Gamrat- MOSiR" Jasło',
//     'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempora consequuntur nulla, obcaecati iusto facere beatae quam ab a sint quis ipsum aut nesciunt qui atque? Sequi vitae animi incidunt?',
//     'background': bgc2,
//     'author': 'Marcin Marciniak',
//     'createdAt': 'piątek, 07 stycznia 2022 | 18:00',
//   },
// ]

const NewsPage = () => {

  const newsList = useSelector(state => state.newsList)
  const { loading, error, news } = newsList;

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Aktualności - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)
    dispatch(listNews())

  }, [dispatch])

  return (
    <>
      {loading ? <LoadingSpinner /> :
        <NewsList
          news={news}
        />
      }
    </>
  )
}

export default NewsPage;