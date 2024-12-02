import { useState } from "react"
import Circle from "../../components/circle"
import { IPosition } from "../../interfaces/iposition"

interface IEditorModeProps {
    track: IPosition[],
    set_track: React.Dispatch<React.SetStateAction<IPosition[]>>
}
export function EditorMode({...props}:IEditorModeProps) {
    const [is_dragging, set_is_dragging] = useState<Boolean>(false)
    return (
        <div
            onMouseDown={() => set_is_dragging(true)}
            onMouseMove={(event) => {
                if (is_dragging)
                    props.set_track((track_list) => [...track_list, { x: event.clientX, y: event.clientY }])
            }}
            onMouseUp={() => set_is_dragging(false)}
            className='w-full h-full'
        >
            {props.track.length > 1 && props.track.map((position) => <Circle color='red' position={position} />)}
        </div>
    )
}
