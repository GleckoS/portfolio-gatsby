import gsap from "gsap"
import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"

export default function ({ children }) {

    const $item = useRef()

    const [direction, changeDirection] = useState('left')

    const startAnimation = () => {
        gsap.killTweensOf('.title')
        gsap.to(".title",
            {
                duration: 12,
                ease: "none",
                xPercent: "-100",
                repeat: -1
            }
        );
    }

    useEffect(() => {
        document.addEventListener('wheel', (event) => {
            if (event.wheelDeltaY < 0) {
                changeDirection('left')
            } else {
                changeDirection('right')
            }
        }, false)

        startAnimation()
    }, [])

    useEffect(() => {
        // startAnimation()
    }, [direction])

    return (
        <Wrapper ref={$item} data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-position="top">
            <h2 className="title">
                {children}
                <span> –</span>
            </h2>
            <h2 className="title">
                {children}
                <span> –</span>
            </h2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 600px;
    width: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    bottom: 5%;

    h2{
        font-family: sans-serif;
        font-size: 12vw;
        font-weight: 400;
        color: #fff;
        text-size-adjust: none;
    }

    #main-title{

    }

    #copy-title{

    }
`