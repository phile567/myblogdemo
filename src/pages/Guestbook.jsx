import { useEffect, useState } from 'react'
import api from '../api/api'

export default function Guestbook() {
	const [entries, setEntries] = useState([])
	const [nick, setNick] = useState('')
	const [content, setContent] = useState('')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	const load = async () => {
		setLoading(true)
		setError('')
		try {
			const res = await api.getGuestbookEntries()
			if (res.success) setEntries(res.data)
		} catch (e) {
			setError('加载留言失败')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => { load() }, [])

	const submit = async (e) => {
		e.preventDefault()
		if (!nick || !content) return
		try {
			await api.createGuestbookEntry({ nickname: nick, content })
			setNick(''); setContent('')
			load()
		} catch (e) {
			setError('提交失败')
		}
	}

	return (
		<main className="container">
			<section className="hero">
				<h1>留言板</h1>
				<p className="muted">Demo 版本 · 内容保存在内存中</p>
			</section>

			<form className="guestbook-form" onSubmit={submit}>
				<div className="form">
					<div className="field">
						<label>昵称</label>
						<input className="input" value={nick} onChange={e=>setNick(e.target.value)} placeholder="你的名字" />
					</div>
					<div className="field">
						<label>留言内容</label>
						<textarea className="textarea" rows="4" value={content} onChange={e=>setContent(e.target.value)} placeholder="想说点什么…" />
					</div>
					<div className="actions">
						<button className="btn" type="submit">发表</button>
					</div>
				</div>
			</form>

			{loading ? (
				<div className="loading">加载中…</div>
			) : error ? (
				<div className="error">{error}</div>
			) : (
				<div className="guestbook-list">
					{entries.map(e => (
						<div key={e.id} className="guestbook-entry">
							<div className="entry-header">
								<div className="user-info">
									<div className="user-name">{e.nickname}</div>
									<div className="timestamp">{new Date(e.createdAt).toLocaleString()}</div>
								</div>
							</div>
							<div className="entry-content">{e.content}</div>
						</div>
					))}
				</div>
			)}

			<footer className="footer">© {new Date().getFullYear()} MyBlog Demo</footer>
		</main>
	)
}
