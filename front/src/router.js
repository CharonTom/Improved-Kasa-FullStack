import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layouts from './Components/Layouts/Layouts'
import Home from './pages/Home/Home'
import Apropos from './pages/A-Propos/Apropos'
import Error from './pages/404/404'
import Fiche from './pages/Fiche/Fiche'
import axios from 'axios'

const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route
        index
        element={<Home />}
        loader={async () => {
          const { data } = await axios.get(
            `http://localhost:3000/api/stuff/appart`
          )
          console.log(data)

          if (data === undefined || data === null) {
            throw new Response('not found', { status: 404 })
          }
          return { data }
        }}
      ></Route>
      <Route
        path="/fiche/:id"
        element={<Fiche />}
        loader={async ({ params }) => {
          const { id } = params
          if (id === undefined || id === null || id === '') {
            throw new Response('not found', { status: 404 })
          }
          const { data } = await axios.get(
            `http://localhost:3000/api/stuff/appart`
          )

          const appart = data.find((appart) => appart.id === id)
          if (appart === undefined || appart === null) {
            throw new Response('not found', { status: 404 })
          }
          return { appart }
        }}
        errorElement={<Error />}
      />
      <Route
        path="about"
        element={<Apropos />}
        loader={async () => {
          const { data } = await axios.get(
            `http://localhost:3000/api/stuff/collapse`
          )

          if (data === undefined || data === null) {
            throw new Response('not found', { status: 404 })
          }
          return { data }
        }}
      ></Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
)
export default rooter
