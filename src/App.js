import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Music from './pages/Music/Music'
import Technology from './pages/Technology/Technology'
import Arts from './pages/Arts/Arts'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
          <Route path="technology" element={<Technology />} />
          <Route path="arts" element={<Arts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
