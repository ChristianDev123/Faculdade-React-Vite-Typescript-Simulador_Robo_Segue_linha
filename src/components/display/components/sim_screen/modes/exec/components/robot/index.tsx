import { IPosition } from "../../../../interfaces/iposition"
import RobotFront from '../../images/RobotFront.png'
import RobotSide from '../../images/RobotSide.png'

interface RobotProps{
    position_before:IPosition
    position_current:IPosition
}

export default function Robot({...props}:RobotProps){
    const diff_pos:IPosition = {
        x:props.position_current.x - props.position_before.x,
        y:props.position_current.y - props.position_before.y
    }
    const modposx = diff_pos.x < 0 ? diff_pos.x * -1 : diff_pos.x
    const modposy = diff_pos.y < 0 ? diff_pos.y * -1 : diff_pos.y
    
    return (
        <div 
            className={`absolute w-14 h-14 transition-all`}
            style={{left:`calc(${props.position_current.x}px - 1.25rem)`, top:`Calc(${props.position_current.y}px - 1.25rem)`}}
        >
            <img 
                src={modposx + 1 >= modposy ? RobotSide : RobotFront}
                className={`w-full h-full transition ${modposx >= modposy && diff_pos.x < 0 && '-scale-x-100'}`}
            />
        </div>
    )
}