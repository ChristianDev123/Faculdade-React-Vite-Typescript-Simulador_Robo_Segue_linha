import { IPosition } from "../../interfaces/iposition"

interface ICircleProps{
    position:IPosition
    color:'red'|'green'
}
export default function Circle({...props}:ICircleProps){
    return (
        <div className={`
            w-5 h-5
            rounded-full
            ${props.color == 'red'?'bg-red-600':'bg-green-600'} opacity-80
            absolute 
        `}
        style={{left:`${props.position.x}px`, top:`calc(${props.position.y}px`}}
        >
            
        </div>
    )
}