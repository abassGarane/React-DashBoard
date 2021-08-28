import { Chart } from '../../components/charts/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { data } from '../../data';
import { SmallWidget } from '../../components/widgets/smWidgets/SmallWidget';
import { LargeWidget } from '../../components/widgets/lgWidgets/LargeWidget';

export default function Home() {
	return (
		<div className='home'>
			<FeaturedInfo />
			<Chart
				name='name'
				data={data}
				dataKey='users'
				title='Users Analytics'
				grid
			/>
			<div className='home__widgets'>
				<SmallWidget />
				<LargeWidget />
			</div>
		</div>
	);
}
