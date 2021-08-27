import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredinfo.css';

export default function FeaturedInfo() {
	return (
		<div className='featured'>
			<div className='featured__item'>
				<div className='featured__item--title'>Revenue</div>
				<div className='featured__container'>
					<div className='featured__money'>$13,456</div>
					<span className='featured__money--rate'>
						-10.8{' '}
						<ArrowDownward className='featured__icon featured__icon--negative' />
					</span>
				</div>
				<span className='featured__sub'>Compared to Last Month</span>
			</div>
			<div className='featured__item'>
				<div className='featured__item--title'>Sales</div>
				<div className='featured__container'>
					<div className='featured__money'>$1,499</div>
					<span className='featured__money--rate'>
						-1.8{' '}
						<ArrowDownward className='featured__icon featured__icon--negative' />
					</span>
				</div>
				<span className='featured__sub'>Compared to Last Month</span>
			</div>
			<div className='featured__item'>
				<div className='featured__item--title'>Cost</div>
				<div className='featured__container'>
					<div className='featured__money'>$1,456</div>
					<span className='featured__money--rate'>
						+10.8 <ArrowUpward className='featured__icon' />
					</span>
				</div>
				<span className='featured__sub'>Compared to Last Month</span>
			</div>
		</div>
	);
}
