import { useEffect, useState } from "react"

export default function useScrollHook() {

    const [scroll, changeScroll] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)

        let maxScroll = (() => { // add resize
            let num = 0
            let screenHeight = window.innerHeight
            document.getElementById('main').childNodes.forEach(el => num += el.clientHeight)
            return ((num - screenHeight) / 120) // add change scroll height
        })()

        document.addEventListener('wheel', (event) => {
            changeScroll((el) => {
                if (event.wheelDeltaY < 0 && el + 1 > maxScroll) {
                    return maxScroll
                } else if (event.wheelDeltaY < 0) {
                    return el + 1
                } else if (el - 1 >= 0) {
                    return el - 1
                } else {
                    return 0
                }
            })
        }, false)
    }, [])

    return scroll
}