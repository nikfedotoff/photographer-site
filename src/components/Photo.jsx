import React, { useRef, useState } from 'react'

const Photo = ({ styles, source, openPicFunc, id, shownImage }) => {
    const el = useRef()
    const [allowClick, setAllowClick] = useState(true)

    let xCenter = window.innerWidth / 2,
		yCenter = window.innerHeight / 2,
        hidden = shownImage != null && shownImage != id

    const openPic = (e) => {
        openPicFunc(id)
        setAllowClick(false)

        setTimeout(() => {
            setAllowClick(true)

            let coords = el.current.getBoundingClientRect()
            el.current.style.transform = `translate(calc(-50% + ${xCenter - coords.x}px), calc(-50% + ${yCenter - coords.y}px))`
        }, 300)
	}

	return <div
        className="img"
        style={hidden ? {...styles, opacity: 0, transform: 'scale(.5)'} : styles}
        onClick={allowClick && openPic}
        ref={el}
    >
        <img
            src={source}
            alt=""
        />
    </div>
}

export default Photo