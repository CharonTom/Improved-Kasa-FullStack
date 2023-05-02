import Banner from '../../Components/Banner/Banner'
import about from '../../assets/about.png'
import Collapse from '../../Components/Collapse/Collapse'
import { useLoaderData } from 'react-router-dom'

function Apropos() {
  const { data } = useLoaderData()

  return (
    <div className="miseenpage">
      <Banner image={about} title="" page={'about'} />
      <section className="section_collapse_about">
        {data.map((dataCollapse, index) => (
          <Collapse
            key={`${dataCollapse}-${index}`}
            contentText={dataCollapse.aboutText}
            headerText={dataCollapse.aboutTitle}
          />
        ))}
      </section>
    </div>
  )
}

export default Apropos
