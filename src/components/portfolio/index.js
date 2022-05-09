import gsap from "gsap"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import ScrollerItem from "./scrollerItem"

export default function Portfolio({ children }) {

    const [currentItem, changeCurrentItem] = useState(0)

    const $root = useRef()
    const $item = useRef()
    const rootBound = useRef()

    const itemBound = { x: 400, y: 400 }
    const speed = 0.5

    const handleMouseEnter = (e) => {
        gsap.killTweensOf($item.current)
        gsap.killTweensOf($root.current)
        gsap.to($item.current, { scale: 1, duration: speed })

        rootBound.current = $root.current.getBoundingClientRect()

        const newX = e.clientX - rootBound.current.left - (itemBound.x / 2)
        const newY = e.clientY - rootBound.current.top - (itemBound.y / 2)

        gsap.set($item.current, {
            x: newX,
            y: newY
        })
    }

    const handleMouseLeave = (e) => {
        const newX = e.clientX - rootBound.current.left - (itemBound.x / 2)
        const newY = e.clientY - rootBound.current.top - (itemBound.y / 2)

        gsap.killTweensOf($item.current)
        gsap.killTweensOf($root.current)
        gsap.to($item.current, {
            x: newX,
            y: newY,
            ease: 'expo',
            scale: 1,
            scale: 0,
            duration: 1.2
        })
    }

    const handleMouseMove = (e) => {
        const newX = e.clientX - rootBound.current.left - (itemBound.x / 2)
        const newY = e.clientY - rootBound.current.top - (itemBound.y / 2)

        let isTopOut = newY < (-itemBound.y / 2)
        let isBottomOut = newY > rootBound.current.height - itemBound.y / 2

        if (isTopOut || isBottomOut) {
            gsap.to($item.current, {
                x: newX,
                y: newY,
                ease: 'expo',
                scale: 1,
                scale: 0,
                duration: 1.2
            })
        } else {
            gsap.to($item.current, {
                x: newX,
                y: newY,
                ease: 'power3.out',
                scale: 1,
                duration: 1.2
            })
        }
    }

    const childHandleMouseEnter = (e) => {
        if (e.currentTarget.id != currentItem) {
            changeCurrentItem(e.currentTarget.id)
        }
    }

    return (
        <Wrapper>
            <Title>
                Recent Work
            </Title>
            <ItemList
                ref={$root}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {portfolioItems.map((el, index) => (
                    <Item id={index} onMouseEnter={childHandleMouseEnter}>
                        <h3>{el.name}</h3>
                        <p>{el.work}</p>
                    </Item>
                ))}
                <ScrollerWrapper ref={$item}>
                    {portfolioItems.map(el => (
                        <ScrollerItem currentItem={currentItem} el={el} />
                    ))}
                </ScrollerWrapper>
            </ItemList>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
`

const Title = styled.div`
    text-transform: uppercase;
    padding: 0 clamp(2.5rem, 8vw, 8rem) clamp(1.5em, 4vw, 2.5em) clamp(2.5rem, 8vw, 8rem);
    color: rgba(28, 29, 32, 0.175);
    font-size: 11px;
`

const ScrollerWrapper = styled.div`
    transform-origin: 50% 50%;
    transform: scale(0);
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;
    width: 400px;
    height: 400px;
    overflow: hidden;
    pointer-events: none;
`

const ItemList = styled.div`
    position: relative;
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px clamp(2.5rem, 8vw, 8rem);
    border-bottom: 1px solid rgba(28, 29, 32, 0.175);

    &:first-child{
        border-top: 1px solid rgba(28, 29, 32, 0.175);
    }

    h3{
        font-size: clamp(2.5rem, 5vw, 6rem); 
        font-weight: 400;
        transition: transform .3s cubic-bezier(0.215, 0.610, 0.355, 1), opacity .3s cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    p{
        transition: transform .3s cubic-bezier(0.215, 0.610, 0.355, 1), opacity .3s cubic-bezier(0.215, 0.610, 0.355, 1);

    }

    &:hover{
        h3{
            opacity: .4;
            transform: translateX(-30px);
        }

        p{
            opacity: .4;
            transform: translateX(30px);
        }
    }
`

const portfolioItems = [
    {
        name: 'Akademia Pana Królika',
        work: 'Development',
        preview: 'https://www.datocms-assets.com/62818/1649737941-animacje-dla-dzieci-akademia-pana-krolika.jpg?w=1000&fit=max&fm=jpg',
        color: 'pink'
    },
    {
        name: 'Cargem',
        work: 'Development',
        preview: 'https://www.datocms-assets.com/61582/1647062057-cargem-warsztat-samochodowy.jpg?w=1000&fit=max&fm=jpg',
        color: 'grey'
    },
]