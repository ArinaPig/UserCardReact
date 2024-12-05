import { type HeaderProps } from '../model/types'

export const Header: React.FC<HeaderProps> = props => {
	const { h1, h2, h3, p, small } = { ...props }

	return (
		<header>
			<div>
				<h1>{h1}</h1>
				<h2>{h2}</h2>
				<h3>{h3}</h3>
				<p>{p}</p>
				<small>{small}</small>
			</div>
		</header>
	)
}
