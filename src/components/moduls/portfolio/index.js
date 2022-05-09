import gsap from "gsap"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import ScrollerItem from "./scrollerItem"

export default function Portfolio({ children }) {

    const [currentItem, changeCurrentItem] = useState(0)

    const $root = useRef()
    const $item = useRef()
    const $button = useRef()
    const $buttonText = useRef()
    const rootBound = useRef()

    const itemBound = { x: 400, y: 400 }
    const buttonBound = { x: 80, y: 80 }
    const speed = 0.5

    const handleMouseEnter = (e) => {
        gsap.killTweensOf($item.current)
        gsap.killTweensOf($root.current)
        gsap.killTweensOf($button.current)
        
        rootBound.current = $root.current.getBoundingClientRect()

        const itemX = e.clientX - rootBound.current.left - (itemBound.x / 2)
        const itemY = e.clientY - rootBound.current.top - (itemBound.y / 2)
        const buttonX = e.clientX - rootBound.current.left - (buttonBound.x / 2)
        const buttonY = e.clientY - rootBound.current.top - (buttonBound.y / 2)

        gsap.set($item.current, {
            x: itemX,
            y: itemY
        })
        gsap.set($button.current, {
            x: buttonX,
            y: buttonY
        })

        gsap.to($item.current, { scale: 1, duration: speed, ease: 'power4.out', })
        gsap.to($button.current, { scale: 1, duration: speed, ease: 'power4.out', })
    }

    const handleMouseLeave = (e) => {
        const itemX = e.clientX - rootBound.current.left - (itemBound.x / 2)
        const itemY = e.clientY - rootBound.current.top - (itemBound.y / 2)
        const buttonX = e.clientX - rootBound.current.left - (buttonBound.x / 2)
        const buttonY = e.clientY - rootBound.current.top - (buttonBound.y / 2)

        gsap.killTweensOf($item.current)
        gsap.killTweensOf($root.current)
        gsap.killTweensOf($button.current)
        gsap.to($item.current, {
            x: itemX,
            y: itemY,
            ease: 'power4.out',
            scale: 1,
            scale: 0,
            duration: .6
        })
        gsap.to($button.current, {
            x: buttonX,
            y: buttonY,
            ease: 'power4.out',
            scale: 1,
            scale: 0,
            duration: .6
        })
    }

    const handleMouseMove = (e) => {
        const itemX = e.clientX - rootBound.current.left - (itemBound.x / 2)
        const itemY = e.clientY - rootBound.current.top - (itemBound.y / 2)
        const buttonX = e.clientX - rootBound.current.left - (buttonBound.x / 2)
        const buttonY = e.clientY - rootBound.current.top - (buttonBound.y / 2)


        gsap.to($item.current, {
            x: itemX,
            y: itemY,
            ease: 'power2.out',
            scale: 1,
            duration: 1
        })

        gsap.to($button.current, {
            x: buttonX,
            y: buttonY,
            ease: 'power3.out',
            scale: 1,
            duration: 1
        })
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
                <ScrollButton ref={$button}>
                    <ScrollText ref={$buttonText}>View</ScrollText>
                </ScrollButton>
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
    z-index: 1;
    left: 0;
    top: 0;
    width: 400px;
    height: 400px;
    overflow: hidden;
    pointer-events: none;
`

const ScrollButton = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: blue;
    pointer-events: none;
    transform: scale(0);
`

const ScrollText = styled.p`
    z-index: 3;
    color: white;
    pointer-events: none;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
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
        color: 'rgb(219, 39, 119)'
    },
    {
        name: 'Decontex',
        work: 'Development',
        preview: 'https://www.datocms-assets.com/62523/1643777837-decontex-polska.jpg?auto=format',
        color: 'rgb(81, 184, 235)'
    },
    {
        name: 'Cargem',
        work: 'Development',
        preview: 'https://www.datocms-assets.com/61582/1647062057-cargem-warsztat-samochodowy.jpg?w=1000&fit=max&fm=jpg',
        color: 'rgb(44, 140, 218)'
    },
]