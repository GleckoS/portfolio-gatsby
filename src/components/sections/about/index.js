import React from "react";
import styled from "styled-components"
import { Container } from "../../../styles/styled";
import MagneticButton from "../../button";
import Portfolio from "../../portfolio";
import Text from "../../text";

export default function About({ translate }) {
    return (
        <Wrapper translate={translate}>
            <Container>
                <Flex>
                    <Text>
                        Helping brands to stand out in the digital era.
                        Together we will set the new status quo.
                        No nonsense, always on the cutting edge.
                    </Text>
                    <SubText>
                        <p>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
                        <MagneticButton>
                            About Me
                        </MagneticButton>
                    </SubText>
                </Flex>
                <Portfolio />
            </Container>
        </Wrapper>
    )
};

const Wrapper = styled.section`
    min-height: 100vh;
    transition: transform .8s cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: translate3d(0, ${props => props.translate * -120}px, 0);
    box-sizing: border-box;
    padding-top: 160px;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 clamp(2.5em, 8vw, 8em);
    gap: clamp(3em, 8vw, 5em);
`;

const SubText = styled.div`
    flex: 60% 0;
    margin-bottom: 100px;
    position: relative;
    p{
        max-width: 14rem;
        font-size: 16px;
        line-height: 1.66;
        margin-bottom: 3rem;
    }
`