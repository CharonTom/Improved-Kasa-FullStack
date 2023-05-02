function Banner({ image, title, page }) {
  return (
    <div className={`banner-${page ? page : ''}`}>
      <img className="banner__img" src={image} alt="Bannière" />
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
