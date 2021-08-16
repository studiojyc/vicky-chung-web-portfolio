import * as React from "react"
import Seo from '../components/Seo'

import Footer from '../components/Footer'


// markup
const IndexPage = () => {
  return (
    <main>
      <Seo title="Home"/>

      <div className="topFrontPage">
        <p>A multidisciplinary independent design studio, based in Sydney. Providing brand development, creative direction and graphic design for clients across a broad range of media. </p>
      </div>
      <section className="sectionDiscipline">

        <div className="titleDiscipline">
          <p>Design</p>
        </div>

        <div className="projectsDiscipline">
          <div className="projectContainer">
            <div className="projectImage">
              <img width="40%" src="https://static.dezeen.com/uploads/2020/06/architects-designers-racial-justice-george-floyd-protests-dezeen-sq-a.jpg" alt="black"/>
            </div>

            <div className="projectText">
              <p>Simone Rocha</p>
              <p>Brand Identity, Printed Materials, E-Commerce</p>
            </div>

          </div>

          <div className="projectContainer">
            <div className="projectImage">
              <img width="40%" src="https://static.dezeen.com/uploads/2020/06/architects-designers-racial-justice-george-floyd-protests-dezeen-sq-a.jpg" alt="black"/>
            </div>

            <div className="projectText">
              <p>Pian Studios</p>
              <p>Brand Identity, Printed Materials, E-Commerce</p>
            </div>

          </div>


        </div>

      </section>
      <section className="sectionDiscipline"></section>

      <Footer/>
    </main>
  )
}

export default IndexPage
