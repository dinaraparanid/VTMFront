import React, {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";

export const useHasBeenViewed = (initialValue: boolean = false) => {
    const [ref, inView] = useInView()
    const prevInView = useRef(initialValue)
    const hasBeenViewed = prevInView.current || inView

    useEffect(() => {
        prevInView.current = inView
    })

    return { hasBeenViewedUrlEditor: hasBeenViewed, refUrlEditor: ref }
}