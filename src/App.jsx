import './App.css'
import { useEffect, useRef } from 'react'

function App() {
	let fff = useRef()

	useEffect(() => {
		setTimeout(() => {
			window.addEventListener('mousemove', (e) => {
				let xCenter = window.innerWidth/2,
					yCenter = window.innerHeight/2
				
				fff.current.style.transform = `translate3d(calc(-50% + ${-(e.pageX - xCenter)*1.5}px), calc(-50% + ${-(e.pageY - yCenter)*1.5}px), 0)`
			})
		}, 1000)
	}, [])

	return (
		<>
			<h1 className="central-word">
				Jivi Emir
			</h1>
			<h2 className="secondary-text">
				Photographer Jimi Emir based in Los Angeles
			</h2>
			<header>
				<div className="burger">
					<div>
						<span></span>
						<span></span>
						<span></span>
					</div>
					Menu
				</div>
				<span className="header-title">Album of 2022</span>
				<div className="header-contact">
					Contact
				</div>
			</header>
			<div className="bg">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="App" ref={fff}>
				<div className="img" style={{
					left: "30%",
					top: "30%"
				}}>
					<img
						src="https://img1.wsimg.com/isteam/ip/d1b3d056-3f07-45e8-9296-3900c23a79b5/DSC09790.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1250,cg:true"
						alt=""
					/>
				</div>
				<div className="img" style={{
					left: "50%",
					top: "50%"
				}}>
					<img
						src="https://img1.wsimg.com/isteam/ip/d1b3d056-3f07-45e8-9296-3900c23a79b5/DSC05899-Recovered.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1250,cg:true"
						alt=""
					/>
				</div>
				<div className="img" style={{
					left: "57%",
					top: "5%"
				}}>
					<img src="https://img1.wsimg.com/isteam/ip/d1b3d056-3f07-45e8-9296-3900c23a79b5/DSC05735.jpg/:/rs=w:370,cg:true,m" alt="" />
				</div>
			</div>
		</>
	)
}

export default App
