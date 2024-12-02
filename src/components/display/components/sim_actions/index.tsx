import { IPosition } from "../sim_screen/interfaces/iposition";
import Action_Button from "./components/action_buttons";

interface ISimActionProps{
    track:IPosition[]
    set_track:React.Dispatch<React.SetStateAction<IPosition[]>>
    is_running:boolean
    set_is_running:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Sim_Action({...props}:ISimActionProps){
    return (
        <div className="flex flex-col gap-2 m-2">
            <Action_Button color='green' disabled={props.is_running} onClick={()=>props.set_is_running(true)}>
                Run
            </Action_Button>
            
            <Action_Button disabled={props.track.length < 1} color='blue' onClick={()=>{
                props.set_track([])
                props.set_is_running(false)
            }}>
                Reset
            </Action_Button>
        </div>
    )
}