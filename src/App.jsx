import Carousel from "./components/Carousel/Carousel"
import CoveredArticle from "./components/CoveredArticle/CoveredArticle"
import Featured from "./components/FeatureNews/Featured"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ImageOfDay from "./components/ImageOfDay/ImageOfDay"
import MoreTopics from "./components/MoreTopics/MoreTopics"
import SmallArticles from "./components/smallerArticles/SmallArticles"

function App() {
  return (
    <>
       <Header />
       <Carousel />
       <Featured />
       <SmallArticles />
       <CoveredArticle />
       <ImageOfDay />
       <MoreTopics />
       <Footer />
    </>
  )
}

export default App
