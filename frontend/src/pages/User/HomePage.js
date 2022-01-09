import Gameplay from "../../components/Home/Gameplay/Gameplay";
import Player from "../../components/Home/Player/Player";
import NewsListBanner from "../../components/Home/NewsListBanner/NewsListBanner";
import { useEffect } from "react";

const HomePage = () => {

  useEffect(() => {
    document.title = "Strona główna - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NewsListBanner />
      <Gameplay />
      <Player />
    </>
  )
}

export default HomePage;