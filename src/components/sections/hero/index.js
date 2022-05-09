import React from "react"
import styled from "styled-components"

export default function Hero({ children, translate }) {
    return (
        <Wrapper translate={translate}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: #999D9E;
    min-height: 100vh;
    transition: transform .8s cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: translate3d(0, ${props => props.translate * -120}px, 0);
`