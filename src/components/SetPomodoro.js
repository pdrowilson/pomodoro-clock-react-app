import { useContext, useState } from "react"
import { SettingContext } from "../context/SettingsContext"
import Button from "./Button"

const SetPomodoro = () => {

    const {updateExecute} = useContext(SettingContext)
    
    const [newTimer, setNewTimer] = useState({
        work: 30,
        short: 15,
        long: 25,
        active: 'work'
    })
    const handleChange = input => {
        const {name, value}  = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak': 
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break
            default:
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
        console.log(newTimer);
    }
    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-wrapper">
                    <input className="input" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <Button title="Set Timer" _callback={handleSubmit} />
            </form>
        </div>
    )
}

export default SetPomodoro
