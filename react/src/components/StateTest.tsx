import { useState } from "react"
import { Header } from "./Header"

export const StateTest = () => {

    const [point, setPoint] = useState(0)
    const addPoint = () => {
        setPoint((prev) => {
            return prev + 1
        })
    }

    const resetPoint = () => {
        setPoint(0)
    }

    const subtractPoint = () => {
        setPoint(point - 1)
    }

    return (
        <div>
            <Header/>
            <button className="p-2 btn btn-primary" onClick={addPoint}>Add Point</button>
            <button className="p-2 btn btn-secondary" onClick={resetPoint}>Reset Point</button>
            <button className="p-2 btn btn-danger" onClick={subtractPoint}>Subtract Point</button>
        </div>
    )
}
