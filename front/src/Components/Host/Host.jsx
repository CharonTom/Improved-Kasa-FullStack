function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img className="host__portrait" src={picture} alt="portrait" />
    </div>
  )
}

export default Host
