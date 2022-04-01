import React, { useRef, useState } from 'react'
import { modelData } from '../data/photos'

const Photo = ({
    data,
	openPicFunc,
	id,
	shownImage,
	text,
	setText,
	allowClick,
	setAllowClick,
}) => {
	const el = useRef()

	let xCenter = window.innerWidth / 2,
		yCenter = window.innerHeight / 2,
		hidden = shownImage != null && shownImage != id

	const clickHandler = (e) => {
		if (hidden) {
			return
		}

		if (allowClick) {
			openPicFunc(id)
			setAllowClick(false)
			setText({
				...text,
				name: data.name,
				location: data.location,
			})

			setTimeout(() => {
				let coords = el.current.getBoundingClientRect()
				el.current.style.transform = `translate(calc(-50% + ${
					xCenter - coords.x
				}px), calc(-50% + ${yCenter - coords.y}px))`

				el.current.classList.toggle('hover')
			}, 300)

			setTimeout(() => {
				setAllowClick(true)
			}, 1100)
		}
	}

	return (
		<div
			className="img"
			style={
				hidden
					? { ...data.styles, opacity: 0, transform: 'scale(.5)' }
					: data.styles
			}
			onClick={clickHandler}
			ref={el}
			onMouseEnter={() =>
				setText({
					...text,
					title: data.name,
				})
			}
			onMouseLeave={() =>
				setText({
					...text,
					title: 'Jivi Emir',
				})
			}
		>
			<img src={data.img} alt="" />
		</div>
	)
}

export default Photo
