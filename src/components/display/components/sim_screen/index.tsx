import { IPosition } from "./interfaces/iposition"
import { EditorMode } from "./modes/editor"
import { ExecMode } from "./modes/exec"

interface ISimScreenProps {
    track: IPosition[],
    set_track: React.Dispatch<React.SetStateAction<IPosition[]>>
    is_running: boolean
}

export default function Sim_Screen({ ...props }: ISimScreenProps) {
    return props.is_running ? <ExecMode track={props.track}  /> : <EditorMode set_track={props.set_track} track={props.track} />
}