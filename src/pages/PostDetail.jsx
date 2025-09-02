import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import api from '../api/api'

export default function PostDetail() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [post, setPost] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		let mounted = true
		;(async () => {
			try {
				const res = await api.getPost(id)
				if (mounted && res.success) setPost(res.data)
			} catch (e) {
				setError('文章不存在')
			} finally {
				setLoading(false)
			}
		})()
		return () => { mounted = false }
	}, [id])

	if (loading) return <div className="loading">加载中…</div>
	if (error) return <div className="error">{error}</div>
	if (!post) return null

	return (
		<main className="container">
			<article className="article">
				<h1>{post.title}</h1>
				<div className="meta">
					{new Date(post.createdAt || post.date).toLocaleString()} · 作者 {post.author || 'admin'}
				</div>
				<div className="content">{post.content}</div>
				<div className="actions" style={{ marginTop: 16 }}>
					<button className="btn ghost" onClick={() => navigate(-1)}>返回</button>
					<Link className="btn" to="/">回到首页</Link>
				</div>
			</article>
			<footer className="footer">© {new Date().getFullYear()} MyBlog Demo</footer>
		</main>
	)
}
