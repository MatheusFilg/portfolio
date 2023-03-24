import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Graduation } from './pages/Graduation'
import { Home } from './pages/Home'
import { Experience } from './pages/Experience'
import { Project } from './pages/Projects'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
