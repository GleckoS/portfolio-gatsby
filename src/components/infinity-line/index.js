import gsap from "gsap"
import React, { useEffect } from "react"
import styled, {keyframes} from "styled-components"

export default function ({ children }) {

    useEffect(() => {
        // gsap.to('#line')
    }, [])

    return (
        <Wrapper id='line'>
            <h1 id="main-title">
                {children}
                <span> –</span>
            </h1>
            <h1 id="copy-title">
                {children}
                <span> –</span>
            </h1>
        </Wrapper>
    )
}

const StrokeLeft = keyframes`
    0%{
        transform: translate3d(0, 0, 0);
    }

    100%{
        transform: translate3d(-50%, 0, 0);
    }
`

// const StrokeRight = keyframes`
//     0%{
//         transform: translate3d(0, 0, 0);
//     }

//     100%{
//         transform: translate3d(-50%, 0, 0);
//     }
// `

const Wrapper = styled.div`
    width: 200%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    animation: ${StrokeLeft} 8s linear infinite;

    h1{
        font-family: sans-serif;
        font-size: 9vw;
        color: #fff;
        text-size-adjust: none;
    }

    #main-title{

    }

    #copy-title{

    }
`