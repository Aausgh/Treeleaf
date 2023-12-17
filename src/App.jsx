import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile';
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;
