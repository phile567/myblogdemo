import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const SiteHeader = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.error('退出失败:', error)
    }
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="site-title">
            <h1>My Blog Demo</h1>
          </Link>
          <nav className="main-nav">
            <Link to="/">首页</Link>
            <Link to="/archive">归档</Link>
            <Link to="/about">关于</Link>
            <Link to="/guestbook">留言板</Link>
          </nav>
        </div>
        
        <div className="header-right">
          {user ? (
            <div className="user-menu">
              <span>欢迎, {user.username}</span>
              <Link to="/my-articles">我的文章</Link>
              <Link to="/create">写文章</Link>
              <button onClick={handleLogout} className="logout-btn">
                退出
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login">登录</Link>
              <Link to="/register">注册</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
