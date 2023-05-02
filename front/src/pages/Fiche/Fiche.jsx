import Carrousel from '../../Components/Carrousel/Carrousel'
import Collapse from '../../Components/Collapse/Collapse'
import Host from '../../Components/Host/Host'
import Rating from '../../Components/Rating/Rating'
import Tag from '../../Components/Tag/Tag'
import { useLoaderData } from 'react-router-dom'

function Fiche() {
  const { appart } = useLoaderData()

  /*-----------------Equipement------------------ */
  const equipLogement = appart.equipments.map((equip, index) => {
    return <li key={index}>{equip}</li>
  })

  return (
    <div className="miseenpage">
      <Carrousel galleryImg={appart.pictures} />
      <section className="section_undercarrousel">
        <div>
          <h1>{appart.title}</h1>
          <p>{appart.location}</p>
          <div className="section_tag">
            {appart.tags.map((apparttag, index) => (
              <Tag key={index} tag={apparttag} />
            ))}
          </div>
        </div>
        <div className="section_undercarrousel__hostAndRate">
          <Host name={appart.host.name} picture={appart.host.picture} />
          <Rating score={appart.rating} />
        </div>
      </section>
      <section className="section_collapse_fiche">
        <Collapse headerText={'Description'} contentText={appart.description} />
        <Collapse headerText={'Equipement'} contentText={equipLogement} />
      </section>
    </div>
  )
}

export default Fiche
