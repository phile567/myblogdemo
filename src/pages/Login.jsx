import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
	const { login } = useAuth()
	const nav = useNavigate()
	const [username, setUsername] = useState('admin')
	const [password, setPassword] = useState('admin')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const submit = async (e) => {
		e.preventDefault()
		setError('')
		setLoading(true)
		try {
			await login({ username, password })
			nav('/')
		} catch (e) {
			setError(e.message || '登录失败')
		} finally {
			setLoading(false)
		}
	}

	return (
		<main className="container">
			<section className="hero">
				<h1>登录</h1>
				<p className="muted">Demo 账号：用户名 admin，密码 admin</p>
			</section>

			<form className="form" onSubmit={submit} style={{ maxWidth: 420, margin: '24px auto' }}>
				<div className="field">
					<label>用户名</label>
					<input className="input" value={username} onChange={e=>setUsername(e.target.value)} />
				</div>
				<div className="field">
					<label>密码</label>
					<input type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} />
				</div>
				{error && <div className="error-message">{error}</div>}
				<div className="actions">
					<button className="btn" disabled={loading} type="submit">{loading ? '登录中…' : '登录'}</button>
				</div>
			</form>

			<footer className="footer">© {new Date().getFullYear()} MyBlog Demo</footer>
		</main>
	)
}
