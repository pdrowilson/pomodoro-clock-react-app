import { useContext } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { SettingContext } from "../context/SettingsContext"

const CountdownAnimation = ({key = 1, timer, animate, children}) => {

    const {stopTimer} = useContext(SettingContext)
    
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={[
            ['#dda60f', 0.33],
            ['#dda60f', 0.33],
            ['#dda60f', 0.33],
            ]}
            strokeWidth={6}
            size={220}
            trailColor="#151932"
            onComplete={ () => {
                stopTimer()
            }}
        >
            {children}
      </CountdownCircleTimer>
    )
}


export default CountdownAnimation
