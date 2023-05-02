import { useState } from 'react'

function Carrousel({ galleryImg }) {
  const [imgAfficher, changerImg] = useState(0)
  const nombreImg = galleryImg.length

  const nextSlide = () => {
    changerImg(imgAfficher === nombreImg - 1 ? 0 : imgAfficher + 1) // on repart au premier slide quand on arrive au dernier
  }
  const prevSlide = () => {
    changerImg(imgAfficher === 0 ? nombreImg - 1 : imgAfficher - 1) // on repart au dernier slide quand on est au premier
  }

  return (
    <section className="section__carrousel">
      {nombreImg > 1 && (
        <div className="section__carrousel__left" onClick={prevSlide}>
          <i className="fa-sharp fa-solid fa-chevron-left left"></i>
        </div>
      )}

      {nombreImg > 1 && (
        <div className="section__carrousel__right" onClick={nextSlide}>
          <i className="fa-sharp fa-solid fa-chevron-right  right"></i>
        </div>
      )}
      {galleryImg.map((gallery, index) => (
        <div key={index}>
          {index === imgAfficher && (
            <img src={gallery} alt="appartement à louer" />
          )}
          {index === imgAfficher && (
            <span className="section__carrousel__number">
              {imgAfficher + 1}/{nombreImg}
            </span>
          )}
        </div>
      ))}
    </section>
  )
}

export default Carrousel
