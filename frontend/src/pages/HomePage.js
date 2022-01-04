import Gameplay from "../components/Home/Gameplay/Gameplay";
import Player from "../components/Home/Player/Player";
import NewsListBanner from "../components/Home/NewsListBanner/NewsListBanner";

const HomePage = () => {
  return (
    <>
      <NewsListBanner />
      <Gameplay />
      <Player />
    </>
  )
}

export default HomePage;