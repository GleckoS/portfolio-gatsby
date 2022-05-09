import { Link } from 'gatsby'
import gsap from 'gsap'
import React, { useRef, useState, useEffect, createRef } from 'react'
import styled from 'styled-components'

export default function MagneticButton({
    children,
    className,
    speed = .5,
    tollerance = 0.3,
    scale = 1.2,
    debug = false,
    borderRadius = '50%'
}) {
    const $root = useRef()
    const $item = useRef()
    const $hover = useRef()
    const rootBound = useRef()
    const itemBound = useRef()
    const diffBound = useRef({ x: 0, y: 0 })


    const handleMouseEnter = () => {
        gsap.killTweensOf($item.current)
        gsap.killTweensOf($root.current)
        gsap.set($hover.current, { y: '100%' })
        gsap.to($hover.current, { y: '0', duration: 0.3 })

        rootBound.current = $root.current.getBoundingClientRect()
        itemBound.current = $item.current.getBoundingClientRect()
        diffBound.current.x = (rootBound.current.width * scale - rootBound.current.width) / 2
        diffBound.current.y = (rootBound.current.height * scale - rootBound.current.height) / 2
    }

    const handleMouseLeave = () => {
        gsap.killTweensOf($item.current)
        gsap.killTweensOf($root.current)
        gsap.to($item.current, {
            x: 0,
            y: 0,
            ease: 'elastic.out(1.1, .4)',
            duration: .8
        })
        gsap.to($root.current, {
            x: 0,
            y: 0,
            ease: 'elastic.out(1.1, .4)',
            duration: .8
        })
        gsap.to($hover.current, { y: '-100%', duration: 0.3 })
    }

    const handleMouseMove = (e) => {
        const x = e.clientX || (e.touches ? e.touches[0].clientX : null) || '0'
        const y = e.clientY || (e.touches ? e.touches[0].clientY : null) || '0'

        const maxX = (rootBound.current.width - itemBound.current.width) / 2 * tollerance
        const maxY = (rootBound.current.height - itemBound.current.height) / 2 * tollerance

        const newX = gsap.utils.mapRange(
            0,
            rootBound.current.width * scale,
            -maxX,
            maxX,
            x - rootBound.current.x + diffBound.current.x
        )

        const newY = gsap.utils.mapRange(
            0,
            rootBound.current.height * scale,
            -maxY,
            maxY,
            y - rootBound.current.y + diffBound.current.y
        )

        const rootX = gsap.utils.mapRange(
            0,
            rootBound.current.width * scale,
            -30,
            30,
            x - rootBound.current.x + diffBound.current.x
        )

        const rootY = gsap.utils.mapRange(
            0,
            rootBound.current.height * scale,
            -30,
            30,
            y - rootBound.current.y + diffBound.current.y
        )
        gsap.killTweensOf($item.current)
        gsap.to($item.current, {
            x: newX,
            y: newY,
            ease: 'power3.out',
            duration: speed
        })

        gsap.to($root.current, {
            x: rootX,
            y: rootY,
            ease: 'power3.out',
            duration: speed
        })
    }

    return (
        <StyledButton
            ref={$root}
            className={`magnetic-button ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onTouchStart={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleMouseLeave}
            onClick={() => {
                console.log('click')
            }}
        >
            <span ref={$item} className="magnetic-button--item">
                {children}
            </span>
            <span ref={$hover} className="magnetic-button--hover" />
        </StyledButton>
    )
}

const StyledButton = styled.button`
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    z-index: 1;
    touch-action: none;
    color: white;
    border-radius: 50%;
    border: none;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background-color: #1C1D20;
    
    span {
        display: inline-block;
        position: relative;
        z-index: 3;
        font-size: 19px;
    }

    .magnetic-button--hover{
        position: absolute;
        z-index: 0;
        left: -25%;
        top: 0;
        width: 150%;
        height: 100%;
        border-radius: 50%;
        background-color: blue;
        transform: translateY(100%);
    }
`