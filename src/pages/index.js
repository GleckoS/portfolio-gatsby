import * as React from "react"
import MagneticButton from "../components/button"
import Hero from "../components/sections/hero"
import InfinityLine from "../components/infinity-line"
import Portfolio from "../components/portfolio"
import About from "../components/sections/about"
import Text from "../components/text"
import useScrollHook from "../hooks/scrollHook"

const IndexPage = () => {
  let scroll = useScrollHook()

  return (
    <main id="main">
      <Hero translate={scroll}>
        <InfinityLine>
          Bohdan Shevhcenko
        </InfinityLine>
        {/* <Text>
          
        </Text>
        <MagneticButton>About Me</MagneticButton> */}
      </Hero>
      <About translate={scroll}>
        <Portfolio/>
      </About>
    </main>
  )
}

export default IndexPage

