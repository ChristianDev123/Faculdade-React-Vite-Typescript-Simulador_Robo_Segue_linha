import { useEffect, useState } from "react";
import Circle from "../../components/circle";
import { IPosition } from "../../interfaces/iposition";
import Robot from "./components/robot";

interface ExecModeProps{
    track:IPosition[]
}

export function ExecMode({ ...props }: ExecModeProps) {
    const [aux_track, set_aux_track] = useState<IPosition[]>([])

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < props.track.length) {
                set_aux_track((tracking) => [...tracking, props.track[index]]);
            }
            index += 1;
        }, 50);
        if (index >= props.track.length) clearInterval(interval);
        return () => {
            clearInterval(interval)
        };
    }, []);

    return (props.track.length < 1
        ? <p>Não há caminho definido ainda</p>
        : (
            <div>
                {aux_track.length > 1 && aux_track.map((position) => position && <Circle color='green' position={position} />)}
                {aux_track.length > 2 && aux_track[aux_track.length-1] &&
                 <Robot 
                    position_current={aux_track[aux_track.length-1]}
                    position_before={aux_track[aux_track.length-2]}
                />}
            </div>
        )
    )
}
