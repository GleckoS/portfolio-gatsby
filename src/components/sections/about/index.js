import React from "react";
import styled from "styled-components"
import { Container } from "../../../styles/styled";
import MagneticButton from "../../moduls/button";
import Portfolio from "../../moduls/portfolio";
import Text from "../../moduls/divided-text";

export default function About() {
    return (
        <Wrapper  data-scroll-section>
            <Container>
                <Flex>
                    <Text data-scroll data-scroll-speed="1">
                        Helping brands to stand out in the digital era.
                        Together we will set the new status quo.
                        No nonsense, always on the cutting edge.
                    </Text>
                    <SubText>
                        <p data-scroll>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
                        <ButtonWrapper data-scroll data-scroll-speed="2">
                            <MagneticButton>
                                About Me
                            </MagneticButton>
                        </ButtonWrapper>
                    </SubText>
                </Flex>
                <Portfolio />
            </Container>
        </Wrapper>
    )
};

const Wrapper = styled.section`
    min-height: 100vh;
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

const ButtonWrapper = styled.div`
`