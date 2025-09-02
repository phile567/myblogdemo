import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api/api'

export default function Home() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let mounted = true
		;(async () => {
			try {
				const res = await api.getPosts(0, 10)
				if (mounted && res.success) {
					setPosts(res.data.content || [])
				}
			} catch (e) {
				setError('加载文章失败')
			} finally {
				setLoading(false)
			}
		})()
		return () => { mounted = false }
	}, [])

	if (loading) return <div className="loading">加载中…</div>
	if (error) return <div className="error">{error}</div>

	return (
		<main className="container">
			<section className="hero">
				<h1>最新文章</h1>
				<p className="muted">Demo 版本 · 本页数据为本地假数据</p>
			</section>

			<div className="list">
				{posts.map(p => (
					<article key={p.id} className="post">
						<h2 className="post-title">
							<Link to={`/post/${p.id}`}>{p.title}</Link>
						</h2>
						<div className="post-meta">
							{new Date(p.createdAt || p.date).toLocaleDateString()} · 作者 {p.author || 'admin'}
						</div>
						{p.summary && <p className="post-excerpt">{p.summary}</p>}
					</article>
				))}
			</div>

			<footer className="footer">© {new Date().getFullYear()} MyBlog Demo</footer>
		</main>
	)
}
