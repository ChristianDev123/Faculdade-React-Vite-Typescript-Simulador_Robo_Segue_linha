import { useState } from "react";
import Sim_Action from "./components/sim_actions";
import Sim_Screen from "./components/sim_screen";
import { IPosition } from "./components/sim_screen/interfaces/iposition";

export default function Display() {
    const [track, set_track] = useState<IPosition[]>([])
    const [is_running, set_is_running] = useState<boolean>(false)
    return (
        <main className="h-screen flex">
            <section className='w-1/3'>
                <Sim_Action track={track} set_track={set_track} is_running={is_running} set_is_running={set_is_running} />
            </section>
            <section className="m-2 border-black border rounded-md w-full">
                <Sim_Screen track={track} set_track={set_track} is_running={is_running}  />
            </section>
        </main>
    )
}