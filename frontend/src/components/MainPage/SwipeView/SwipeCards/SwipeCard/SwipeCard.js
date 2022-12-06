const React = require('react');
const { useSpring, animated } = require('@react-spring/web');

const height = window.innerHeight;
const width = window.innerWidth;

const settings = {
    maxTilt: 25, // in deg
    rotationPower: 50,
    swipeThreshold: 0.5 // need to update this threshold for RN (1.5 seems reasonable...?)
}

// physical properties of the spring
const physics = {
    touchResponsive: {
        friction: 50,
        tension: 2000
    },
    animateOut: {
        friction: 30,
        tension: 400
    },
    animateBack: {
        friction: 10,
        tension: 200
    }
}

const pythagoras = (x, y) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}

const animateOut = async (gesture, setSpringTarget) => {
    const diagonal = pythagoras(height, width)
    const velocity = pythagoras(gesture.x, gesture.y)
    const finalX = diagonal * gesture.x
    const finalY = diagonal * gesture.y
    const finalRotation = gesture.x * 45
    const duration = diagonal / velocity

    setSpringTarget.start({
        xyrot: [finalX, finalY, finalRotation],
        config: { duration: duration }
    })

    // for now animate back
    return await new Promise((resolve) =>
        setTimeout(() => {
            resolve()
        }, duration)
    )
}

const animateBack = (setSpringTarget) => {
    // translate back to the initial position
    return new Promise((resolve) => {
        setSpringTarget.start({ xyrot: [0, 0, 0], config: physics.animateBack, onRest: resolve })
    })
}

// must be created outside of the TinderCard forwardRef
const AnimatedDiv = animated.div

const SwipeCard = React.forwardRef(
    (
        { children, onSwipe, onCardLeftScreen, className, swipeThreshold = settings.swipeThreshold },
        ref
    ) => {
        const [{ xyrot }, setSpringTarget] = useSpring(() => ({
            xyrot: [0, 0, 0],
            config: physics.touchResponsive
        }))

        settings.swipeThreshold = swipeThreshold

        React.useImperativeHandle(ref, () => ({
            async swipe(dir = 'right') {
                if (onSwipe) onSwipe(dir)
                const power = 1.3
                const disturbance = (Math.random() - 0.5) / 2
                if (dir === 'right') {
                    await animateOut({ x: power, y: disturbance }, setSpringTarget)
                } else if (dir === 'left') {
                    await animateOut({ x: -power, y: disturbance }, setSpringTarget)
                } else if (dir === 'up') {
                    await animateOut({ x: disturbance, y: power }, setSpringTarget)
                } else if (dir === 'down') {
                    await animateOut({ x: disturbance, y: -power }, setSpringTarget)
                }
                if (onCardLeftScreen) onCardLeftScreen(dir)
            },
            async restoreCard() {
                await animateBack(setSpringTarget)
            }
        }))

        const element = React.useRef()

        return (
            React.createElement(AnimatedDiv, {
                ref: element,
                className,
                style: {
                    transform: xyrot.to((x, y, rot) => `translate3d(${x}px, ${y}px, ${0}px) rotate(${rot}deg)`)
                },
                children
            })
        )
    }
)

export default SwipeCard;