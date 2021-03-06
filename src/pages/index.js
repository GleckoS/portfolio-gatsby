import * as React from "react"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import LocomotiveScroll from 'locomotive-scroll';

const IndexPage = () => {

  const scrollRef = React.createRef();

  React.useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <main ref={scrollRef}>
      <Hero />
      <About/>
    </main>
  )
}

export default IndexPage

