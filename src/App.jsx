import { Home } from '../pages/Home'

/*ASSETS*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom'
import './assets/scss/index.scss'

library.add( fas )

function App() {

  return (
    <>
     <Routes>
        <Route path='/home' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
