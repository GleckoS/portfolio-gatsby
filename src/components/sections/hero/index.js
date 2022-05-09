import React from "react"
import styled from "styled-components"
import InfinityLine from "../../moduls/infinity-line"

export default function Hero() {
    return (
        <Wrapper data-scroll-section>
            <Image>
                <img src="https://dennissnellenberg.com/assets/img/DSC07033.jpg"/>
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