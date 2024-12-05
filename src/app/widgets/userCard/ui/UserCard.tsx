import { UserCardProps } from '../model/types'
import UserImage from '../../../shared/images/asabeneh.jpg'
import Image from 'next/image'
import style from '../../../index.module.css'

export const UserCard: React.FC<UserCardProps> = props => {
	const { author } = { ...props }

	return (
		<div>
			<Image src={UserImage} alt={'user image'} className={style.userCardImg} />
			<h2 className={style.boldText}>
				{author.firstName} {author.lastName}
			</h2>
			<p className={style.lightText}>
				{author.profession}, {author.country}
			</p>
		</div>
	)
}
