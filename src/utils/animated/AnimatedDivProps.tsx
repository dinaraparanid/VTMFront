import {AnimationControls, MotionStyle, Target, TargetAndTransition, Transition} from "framer-motion";
import React from "react";

export type AnimatedDivProps = {
    // add updater
    className?: string | undefined,
    style?: MotionStyle | undefined,
    initial?: Target
    animate?: AnimationControls | TargetAndTransition
    transition?: Transition
    children?: React.ReactNode,
}