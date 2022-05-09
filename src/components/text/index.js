import React from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

export default function Text({ children }) {
    const elements = children.split(' ')

    const startAnimation = () => {
        document.getElementById('paragraph').classList.add('active')
    }
    const closeAnimation = () => {
        document.getElementById('paragraph').classList.remove('active')
    }

    const { ref, inView, entry } = useInView({threshold: 0.5})
    console.log(inView)
    return (
        <Paragraph id="paragraph" ref={ref}>
            {elements.map((el, index) => (
                <Word inView={inView} index={index + 10}><span>{el} </span></Word>
            ))}


        </Paragraph>
    )
}

const Word = styled.span`
    overflow: hidden; 
    display: block;
    span{
        transition: ${props => props.index / 30}s cubic-bezier(0.215, 0.610, 0.355, 1);
        transform: ${props => props.inView ? 'translateY(0)' : 'translateY(100%)'};
        display: block;    

    }
`

const Paragraph = styled.p`
    font-size: clamp(1.55em, 2.3vw, 2.5em);
    line-height: 1.45;
    font-weight: 450;   
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`