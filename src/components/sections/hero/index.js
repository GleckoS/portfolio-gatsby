import React from "react"
import styled from "styled-components"
import { Container } from "../../../styles/styled"
import InfinityLine from "../../moduls/infinity-line"

export default function Hero() {
    return (
        <Wrapper data-scroll-section>
            <Container>
                <Row>
                    <svg  data-scroll data-scroll-speed="-3" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>arrow-up-right</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Artboard" transform="translate(-1019.000000, -279.000000)" stroke="#FFFFFF" stroke-width="1.5">
                                <g id="arrow-up-right" transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                    <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                    <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h1  data-scroll data-scroll-speed="-1">Front-end Developer</h1>
                </Row>
            </Container>
            <Image data-scroll data-scroll-speed="-3">
                <img src="https://dennissnellenberg.com/assets/img/DSC07033.jpg" />
            </Image>
            <InfinityLine >
                Bohdan Shevhcenko
            </InfinityLine>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: #999D9E;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
`

const Image = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    img{
        position: absolute;
        bottom: 0;
        top: -10vh;
        left: 50%;
        transform: translateX(-50%);
        height: 120vh;
    }
`

const Row = styled.div`
    position: relative;
    z-index: 10;
    margin-left: auto;
    margin-right: 100px;
    margin-bottom: 150px;
    width: fit-content;

    svg{
        transform: scale(1.8);
        transform-origin: 0 0;
    }

    h1{
        color: white;
        margin-top: 150px;
        font-weight: 400;
        font-size: clamp(1.55em, 2.3vw, 2.5em);
    }
`