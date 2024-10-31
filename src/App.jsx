import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import Layout from './Layout'
import LandingPage from './pages/LandingPage'
import WorkPage from './pages/WorkPage'
function App() {

  return (
    <main className='bg-white dark:bg-zinc-900 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<LandingPage />}/>
            <Route path='projects' element={<ProjectsPage />}/>
            <Route path='work' element={<WorkPage/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
