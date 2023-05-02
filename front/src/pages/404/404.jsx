import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <div className="error__big">404</div>
      <div className="error__text">
        Oups! la page que vous demandez n'existe pas.
      </div>
      <Link to="/" className="error__link">
        Retourner sur la page d'Accueil
      </Link>
    </div>
  )
}

export default Error
