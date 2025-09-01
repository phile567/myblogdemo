import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import SiteHeader from './components/SiteHeader'
import Home from './pages/Home'
import About from './pages/About'
import Archive from './pages/Archive'
import Guestbook from './pages/Guestbook'
import Login from './pages/Login'
import Register from './pages/Register'
import MyArticles from './pages/MyArticles'
import ArticleCreate from './pages/ArticleCreate'
import ArticleEdit from './pages/ArticleEdit'
import PostDetail from './pages/PostDetail'
import './styles/blog.css'

function App() {
  return (
    <AuthProvider>
      <Router basename="/myblogdemo">
        <div className="App">
          <SiteHeader />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/guestbook" element={<Guestbook />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-articles" element={<MyArticles />} />
              <Route path="/create" element={<ArticleCreate />} />
              <Route path="/edit/:id" element={<ArticleEdit />} />
              <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
