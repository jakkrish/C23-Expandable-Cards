import { useEffect, useState } from "react"
import Panel from "./Panel"

const Card = (props) => {
  const { title, content, expandable, image } = props.data
  const [mouse, setMouse] = useState(false)

  const handleMouseEnter = () => {
    setMouse(true)
  }
  const handleMouseLeave = () => {
    setMouse(false)
  }

  // useEffect(()=>{

  // },[mouse])

  return (
    <Panel>
      <div className={`transition-all duration-300 origin-top-left overflow-hidden text-ellipsis p-5 ${mouse ? "max-w-72 max-h-72" : "max-w-52 max-h-52"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-3sm">{content}</div>
      </div>
    </Panel>
  )
}

export default Card
