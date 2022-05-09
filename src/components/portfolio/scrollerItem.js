import React, { useRef } from "react"
import styled from "styled-components"

export default function Scroller({ el, currentItem }) {
    return (
        <Wrapper color={el.color} move={currentItem}>
            <img src={el.preview} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
    transition: transform .5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    transform: translateY(${props => -100 * props.move}%);
    img{
        max-width: 90%;
    }
`

const Item = styled.div`
`