import './App.css'
import { useEffect, useRef, useState } from 'react'
import Photo from './components/Photo'

const App = () => {
	const [allowDrag, setAllowDrag] = useState(true)
	const [shownImage, setShownImage] = useState(null)
	let App = useRef()

	let xCenter = window.innerWidth / 2,
		yCenter = window.innerHeight / 2

	const openPicFunc = (id) => {
		setAllowDrag(false)
		setShownImage(id)
	}

	useEffect(() => {
		if (!allowDrag) {
			return
		}

		const mouseFunc = (e) => {
			App.current.style.transform = `translate3d(calc(-50% + ${
				-(e.pageX - xCenter) * 1.5
			}px), calc(-50% + ${-(e.pageY - yCenter) * 1.5}px), 0)`
		}

		setTimeout(() => {
			window.addEventListener('mousemove', mouseFunc)
		}, 1000)
		
		return () => window.removeEventListener('mousemove', mouseFunc)
	}, [allowDrag])

	return (
		<>
			<h1 className="central-word">Jivi Emir</h1>
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
				<div className="header-contact">Contact</div>
			</header>
			<div className="bg">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="App" ref={App}>
				<Photo
					id={1}
					styles={{
						left: '30%',
						top: '30%',
					}}
					source="https://img1.wsimg.com/isteam/ip/d1b3d056-3f07-45e8-9296-3900c23a79b5/DSC09790.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1250,cg:true"
					openPicFunc={openPicFunc}
					shownImage={shownImage}
				/>
				<Photo
					id={2}
					styles={{
						left: '50%',
						top: '50%',
					}}
					source="https://img1.wsimg.com/isteam/ip/d1b3d056-3f07-45e8-9296-3900c23a79b5/DSC05899-Recovered.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1250,cg:true"
					openPicFunc={openPicFunc}
					shownImage={shownImage}
				/>
				<Photo
					id={3}
					styles={{
						left: '57%',
						top: '5%',
					}}
					source="https://img1.wsimg.com/isteam/ip/d1b3d056-3f07-45e8-9296-3900c23a79b5/DSC05735.jpg/:/rs=w:370,cg:true,m"
					openPicFunc={openPicFunc}
					shownImage={shownImage}
				/>
			</div>
		</>
	)
}

export default App
