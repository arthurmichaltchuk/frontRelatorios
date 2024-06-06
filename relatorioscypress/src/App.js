import SharedLayout from './components/SharedLayout';
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
   return(
     <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        
          <Route index element={<Home />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
 
   
}

export default App;