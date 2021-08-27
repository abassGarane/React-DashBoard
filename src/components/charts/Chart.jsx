import './chart.css';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
export const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className='chart'>
			<h3 className='chart__title'>{title}</h3>
			<ResponsiveContainer width='100%' aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey='name' stroke='#666' />
					<YAxis dataKey={dataKey} stroke='#666' />
					<Line type='monotone' dataKey={dataKey} stroke='#c1f' />
					<Tooltip />
					{grid && <CartesianGrid stroke='#e5e5e5' strokeDasharray='5 5' />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
