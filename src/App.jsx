import Carousel from "./components/Carousel/Carousel"
import CoveredArticle from "./components/CoveredArticle/CoveredArticle"
import Featured from "./components/FeatureNews/Featured"
import Header from "./components/Header/Header"
import SmallArticles from "./components/smallerArticles/SmallArticles"

function App() {
  return (
    <>
       <Header />
       <Carousel />
       <Featured />
       <SmallArticles />
       <CoveredArticle />
    </>
  )
}

export default App
