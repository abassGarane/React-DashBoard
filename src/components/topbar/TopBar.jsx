import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
export default function TopBar() {
	return (
		<div className='topbar'>
			<div className='topbar__wrapper'>
				<div className='topbar__left'>
					<span className='logo'>Garane</span>
				</div>
				<div className='topbar__right'>
					<div className='topbar__icon--container'>
						<NotificationsNone />
						<span className='icon__badge'>3</span>
					</div>
					<div className='topbar__icon--container'>
						<Language />
					</div>
					<div className='topbar__icon--container'>
						<Settings />
					</div>
					<img
						src='https://images.unsplash.com/photo-1629817045948-8d7756fe1fd9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
						alt=''
						className='topbar__avatar'
					/>
				</div>
			</div>
		</div>
	);
}
