import Banner from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import Cards from '../../Components/Cards/Cards'
import home from '../../assets/home.png'
import { Link } from 'react-router-dom'

function Home() {
  const { data } = useLoaderData()
  return (
    <section className="miseenpage">
      <Banner
        image={home}
        title="Chez vous, partout et ailleurs"
        page={'acceuil'}
      />
      <div className="grid">
        {data.map((appartment) => (
          <Link
            key={appartment.id}
            className="link-card"
            to={`/fiche/${appartment.id}`}
          >
            <Cards image={appartment.cover} title={appartment.title} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
