import { useContext, useEffect } from "react";
import Button from "./components/Button";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";
import CountdownAnimation from "./components/CountdownAnimation";

function App() {
  const {
    pomodoro, 
    executing, 
    setCurrentTimer, 
    settingBtn, 
    children, 
    startAnimate, 
    startTimer, 
    pauseTimer,
    updateExecute
  } = useContext(SettingContext)

  useEffect(() => {
    updateExecute(executing)
    return () => {
      
    }
}, [executing, startAnimate])

  return (
    <div className="container">
      <h1>POMODORO CLOCK</h1>
      <small>Be productie the right way.</small>
      
      {pomodoro === 0 ? 
      
        <SetPomodoro /> : 
        
        <>
          <ul className="labels">
            <li>
              <Button title="work" activeClass={executing.active === 'work'? 'active-label' : undefined} _callback={() => setCurrentTimer('work')} />
            </li>
            <li>
              <Button title="short" activeClass={executing.active === 'short'? 'active-label' : undefined} _callback={() => setCurrentTimer('short')} />
            </li>
            <li>
              <Button title="long" activeClass={executing.active === 'long'? 'active-label' : undefined} _callback={() => setCurrentTimer('long')} />
            </li>
          </ul>

          <Button title="Settings" _callback={settingBtn} />

          <div className="timer-container">
            <CountdownAnimation
              key={pomodoro}
              timer={pomodoro}
              animate={startAnimate}
              >
              {children}
            </CountdownAnimation>
          </div>
          
          <div className="button-wrapper">
            <Button title="Start" activeClass={!startAnimate ? 'active-label' : undefined} _callback={startTimer} />
            <Button title="Pause" activeClass={startAnimate ? 'active-label' : undefined} _callback={pauseTimer} />
          </div>
        </>
      }
    </div>
  );
}

export default App;
