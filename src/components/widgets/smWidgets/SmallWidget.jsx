import { Visibility } from '@material-ui/icons';
import React from 'react';
import './smallwidget.css';
export const SmallWidget = () => {
	return (
		<div className='smallwidget'>
			<span className='smallwidget__title'>New Users</span>
			<ul className='smallwidget__list'>
				<li className='list__item'>
					<img
						src='https://images.unsplash.com/photo-1629980263168-db4f9e88e94b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
						alt=''
						className='smallwidget__img'
					/>
					<div className='smallwidget__user'>
						<span className='user__name'>Diyad Garane</span>
						<span className='user__job--title'>Software Engineer</span>
					</div>
					<button className='smallwidget__btn'>
						<Visibility className='smallwidget__icon' />
						Display
					</button>
				</li>
				<li className='list__item'>
					<img
						src='https://images.unsplash.com/photo-1629980263168-db4f9e88e94b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
						alt=''
						className='smallwidget__img'
					/>
					<div className='smallwidget__user'>
						<span className='user__name'>Diyad Garane</span>
						<span className='user__job--title'>Software Engineer</span>
					</div>
					<button className='smallwidget__btn'>
						<Visibility className='smallwidget__icon' />
						Display
					</button>
				</li>
				<li className='list__item'>
					<img
						src='https://images.unsplash.com/photo-1629980263168-db4f9e88e94b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
						alt=''
						className='smallwidget__img'
					/>
					<div className='smallwidget__user'>
						<span className='user__name'>Diyad Garane</span>
						<span className='user__job--title'>Software Engineer</span>
					</div>
					<button className='smallwidget__btn'>
						<Visibility className='smallwidget__icon' />
						Display
					</button>
				</li>
				<li className='list__item'>
					<img
						src='https://images.unsplash.com/photo-1629980263168-db4f9e88e94b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
						alt=''
						className='smallwidget__img'
					/>
					<div className='smallwidget__user'>
						<span className='user__name'>Diyad Garane</span>
						<span className='user__job--title'>Software Engineer</span>
					</div>
					<button className='smallwidget__btn'>
						<Visibility className='smallwidget__icon' />
						Display
					</button>
				</li>
				<li className='list__item'>
					<img
						src='https://images.unsplash.com/photo-1629980263168-db4f9e88e94b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
						alt=''
						className='smallwidget__img'
					/>
					<div className='smallwidget__user'>
						<span className='user__name'>Diyad Garane</span>
						<span className='user__job--title'>Software Engineer</span>
					</div>
					<button className='smallwidget__btn'>
						<Visibility className='smallwidget__icon' />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
};
