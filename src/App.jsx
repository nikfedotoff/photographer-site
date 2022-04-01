import './App.css'
import { useEffect, useRef, useState } from 'react'
import Photo from './components/Photo'
import { modelData } from './data/photos'

const App = () => {
	const [allowDrag, setAllowDrag] = useState(true)
	const [shownImage, setShownImage] = useState(null)
	const [allowClick, setAllowClick] = useState(true)
	const [text, setText] = useState({
		title: "Jivi Emir",
		name: ""
	})
	let App = useRef()

	let xCenter = window.innerWidth / 2,
		yCenter = window.innerHeight / 2

	const openPicFunc = (id) => {
		setAllowDrag(!allowDrag)
		setShownImage(shownImage ? null : id)
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
			<h1 className="central-word">{shownImage ? modelData[shownImage - 1].name : text.title}</h1>
			<h2 className="secondary-text">
				Photographer Jimi Emir based in Los Angeles
			</h2>
			<h2 className={`secondary-text data ${shownImage ? undefined : 'data-hide'}`}>
				{/* <span className="back"></span> */}
				Location: {text.location}<br/>
				Model: {text.name}
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
				{
					modelData.map((i, index) => <Photo
						id={index + 1}
						openPicFunc={openPicFunc}
						shownImage={shownImage}
						text={text}
						setText={setText}
						setAllowClick={setAllowClick}
						allowClick={allowClick}
						data={i}
					/>)
				}
			</div>
		</>
	)
}

export default App
