import { TechListProps } from "../model/types"
import style from '../../../index.module.css'

export const TechList: React.FC<TechListProps> = (props) => {

  const {techs} = {...props}

  return (
    <div>
      <h2 className={style.boldText}>SKILLS</h2>
      <div className={style.techs}>{techs.map((tech) => (<div key = {tech.id} className={style.techItem}>{tech.name}</div>))}</div>
    </div>
    
  )
}