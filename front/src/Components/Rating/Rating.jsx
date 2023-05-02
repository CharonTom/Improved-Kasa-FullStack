function Rating({ score }) {
  const fullStar = <i className="fa-solid fa-star"></i>
  const emptyStar = <i className="fa-regular fa-star"></i>

  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="stars">
      {stars.map((level) =>
        score >= level ? (
          <div key={level.toString()}>{fullStar}</div>
        ) : (
          //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props

          <div key={level.toString()}>{emptyStar}</div>
        )
      )}
    </div>
  )
}

export default Rating
