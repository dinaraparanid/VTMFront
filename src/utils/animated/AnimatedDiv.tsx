import React, {FC} from "react";
import {motion} from "framer-motion";
import {AnimatedDivProps} from "./AnimatedDivProps";

const AnimatedDiv: FC<AnimatedDivProps> = (
    {
        className,
        style,
        initial = { opacity: 0, scale: 0.5 },
        animate = { opacity: 1, scale: 1 },
        transition = { default: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] } },
        children
    }
) => <motion.div
    className={className}
    style={style}
    initial={initial}
    animate={animate}
    transition={transition}
>{children}</motion.div>

export default AnimatedDiv
