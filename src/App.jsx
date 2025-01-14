import { Home } from '../pages/Home'
import NavBar from '../componnents/Navbar'

/*ASSETS*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom'
import './assets/scss/index.scss'

library.add( fas )

function App() {

  return (
    <>
     <NavBar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
