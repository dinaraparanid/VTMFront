import {memo} from "react";
import AnimatedDiv from "./AnimatedDiv";
import {AnimatedDivProps} from "./AnimatedDivProps";

const PureAnimatedDiv = (
    props?: AnimatedDivProps,
    propsAreEqual?: (
        (prevProps: Readonly<AnimatedDivProps>, nextProps: Readonly<AnimatedDivProps>) => boolean
    ) | undefined
) => memo(AnimatedDiv, propsAreEqual)

export default PureAnimatedDiv