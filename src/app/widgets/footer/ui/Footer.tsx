import { FooterProps } from '../model/types.js'
import style from '../../../index.module.css'

export const Footer: React.FC<FooterProps> = props => {
	const { date } = { ...props }

	return (
		<div className={style.lightText}>
			<p>Joined on {date}</p>
		</div>
	)
}
