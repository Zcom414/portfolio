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
<<<<<<< HEAD
        <Route path='/' element={<Home/>}/>
=======
        <Route path='/home' element={<Home/>}/>
>>>>>>> 02a99b613430dd43b53ff63b2845a36217e19811
     </Routes>
    </>
  )
}

export default App
