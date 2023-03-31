import { Header } from "../common/components/ui/header/header.js" 
import { Footer } from "../common/components/ui/footer/footer.js"

const Custom404 = () => {
  return (
    <>
      <Header/>
      <div style={{margin: "25%", textAlign: "center"}}>
            404: Page Not Found
        </div>
      <Footer/>
    </>
  )
}

export default Custom404
