import * as React from "react"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import useScrollHook from "../hooks/scrollHook"

const IndexPage = () => {
  let scroll = useScrollHook()

  return (
    <main id="main">
      <Hero translate={scroll}>
        {/* <InfinityLine>
          Bohdan Shevhcenko
        </InfinityLine> */}
      </Hero>
      <About translate={scroll}/>
    </main>
  )
}

export default IndexPage

