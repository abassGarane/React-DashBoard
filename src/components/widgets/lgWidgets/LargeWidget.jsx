import './largewidget.css';

export const LargeWidget = () => {
	const Button = ({ type }) => {
		return <button className={'largewidget__btn ' + type}>{type}</button>;
	};
	return (
		<div className='largewidget'>
			<h3 className='largewidget__title'>Latest Trasactions </h3>
			<table className='largewidget__table'>
				<tr className='table__tr '>
					<th className='table__head'>Customer</th>
					<th className='table__head'>Date</th>
					<th className='table__head'>Amount</th>
					<th className='table__head'>Status</th>
				</tr>
				<tr className='largewidget__tr'>
					<td className='largewidget__user'>
						<img
							src='https://images.unsplash.com/photo-1629907718976-9c91ca3b76b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
							alt=''
							className='user__img'
						/>
						<span className='largewidget__user__name'>Abass Garane</span>
					</td>
					<td className='table__date'>27/8/2021</td>
					<td className='table__amount'>$400</td>
					<td className='table__status'>
						<Button type='approved' />
					</td>
				</tr>
				<div className='hover'></div>
				<tr className='largewidget__tr'>
					<td className='largewidget__user'>
						<img
							src='https://images.unsplash.com/photo-1629907718976-9c91ca3b76b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
							alt=''
							className='user__img'
						/>
						<span className='largewidget__user__name'>Abass Garane</span>
					</td>
					<td className='table__date'>27/8/2021</td>
					<td className='table__amount'>$400</td>
					<td className='table__status'>
						<Button type='approved' />
					</td>
				</tr>
				<tr className='largewidget__tr'>
					<td className='largewidget__user'>
						<img
							src='https://images.unsplash.com/photo-1629907718976-9c91ca3b76b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
							alt=''
							className='user__img'
						/>
						<span className='largewidget__user__name'>Abass Garane</span>
					</td>
					<td className='table__date'>27/8/2021</td>
					<td className='table__amount'>$400</td>
					<td className='table__status'>
						<Button type='declined' />
					</td>
				</tr>
				<tr className='largewidget__tr'>
					<td className='largewidget__user'>
						<img
							src='https://images.unsplash.com/photo-1629907718976-9c91ca3b76b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
							alt=''
							className='user__img'
						/>
						<span className='largewidget__user__name'>Abass Garane</span>
					</td>
					<td className='table__date'>27/8/2021</td>
					<td className='table__amount'>$400</td>
					<td className='table__status'>
						<Button type='pending' />
					</td>
				</tr>
				<tr className='largewidget__tr'>
					<td className='largewidget__user'>
						<img
							src='https://images.unsplash.com/photo-1629907718976-9c91ca3b76b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
							alt=''
							className='user__img'
						/>
						<span className='largewidget__user__name'>Abass Garane</span>
					</td>
					<td className='table__date'>27/8/2021</td>
					<td className='table__amount'>$400</td>
					<td className='table__status'>
						<Button type='declined' />
					</td>
				</tr>
			</table>
		</div>
	);
};
