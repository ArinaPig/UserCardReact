import { TechList } from './widgets/techList/ui/TechList'
import { UserCard } from './widgets/userCard/ui/UserCard'
import { Footer } from './widgets/footer/ui/Footer'
import { type Techs } from './widgets/techList/model/types'

const Home = () => {
	const author = {
		firstName: 'ASABENEH',
		lastName: 'YETAYEH',
		profession: 'Senior Developer',
		country: 'Finland',
	}

	const techs: Array<Techs> = [
		{
			id: '1',
			name: 'HTML',
		},
		{
			id: '2',
			name: 'CSS',
		},
		{
			id: '3',
			name: 'Sass',
		},
		{
			id: '4',
			name: 'JS',
		},
		{
			id: '5',
			name: 'React',
		},
		{
			id: '6',
			name: 'Redux',
		},
		{
			id: '7',
			name: 'Node',
		},
		{
			id: '8',
			name: 'MongoDB',
		},
		{
			id: '9',
			name: 'Python',
		},
		{
			id: '10',
			name: 'Flask',
		},
		{
			id: '11',
			name: 'Django',
		},
		{
			id: '12',
			name: 'NumPy',
		},
		{
			id: '13',
			name: 'Pandas',
		},
		{
			id: '14',
			name: 'Data Analysis',
		},
		{
			id: '15',
			name: 'MYSQL',
		},
		{
			id: '16',
			name: 'GraphQL',
		},
		{
			id: '17',
			name: 'D3.js',
		},
		{
			id: '18',
			name: 'Gatsby',
		},
		{
			id: '19',
			name: 'Docker',
		},
		{
			id: '20',
			name: 'Heroku',
		},
		{
			id: '21',
			name: 'Git',
		},
	]

	const date = 'Aug 30, 2020'

	return (
		<>
			<UserCard author={author} />
			<TechList techs={techs} />
			<Footer date={date} />
		</>
	)
}

export default Home
