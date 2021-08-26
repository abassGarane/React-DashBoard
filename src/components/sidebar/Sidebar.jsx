import './sidebar.css';
import {
	AttachMoney,
	BarChart,
	ChatBubbleOutline,
	DynamicFeed,
	EventNote,
	Home,
	MailOutlined,
	PermIdentity,
	Report,
	Shop,
	Timeline,
	TrendingUp,
} from '@material-ui/icons';
export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__wrapper'>
				<div className='sidebar__menu'>
					<h3 className='sidebar__title'>DashBoard</h3>
					<ul className='sidebar__items'>
						<li className='sidebar__item active'>
							<Home className='sidebar__icon' />
							Home
						</li>
						<li className='sidebar__item'>
							<Timeline className='sidebar__icon' />
							Analytics
						</li>
						<li className='sidebar__item'>
							<TrendingUp className='sidebar__icon' />
							Sales
						</li>
					</ul>
				</div>
				<div className='sidebar__menu'>
					<h3 className='sidebar__title'>Quick Menu</h3>
					<ul className='sidebar__items'>
						<li className='sidebar__item'>
							<PermIdentity className='sidebar__icon' />
							Users
						</li>
						<li className='sidebar__item'>
							<Shop className='sidebar__icon' />
							Products
						</li>
						<li className='sidebar__item'>
							<AttachMoney className='sidebar__icon' />
							Transactions
						</li>
						<li className='sidebar__item'>
							<BarChart className='sidebar__icon' />
							Reports
						</li>
					</ul>
				</div>
				<div className='sidebar__menu'>
					<h3 className='sidebar__title'>Notifications</h3>
					<ul className='sidebar__items'>
						<li className='sidebar__item'>
							<MailOutlined className='sidebar__icon' />
							Mail
						</li>
						<li className='sidebar__item'>
							<DynamicFeed className='sidebar__icon' />
							Feedback
						</li>
						<li className='sidebar__item'>
							<ChatBubbleOutline className='sidebar__icon' />
							Messages
						</li>
					</ul>
				</div>
				<div className='sidebar__menu'>
					<h3 className='sidebar__title'>Staff</h3>
					<ul className='sidebar__items'>
						<li className='sidebar__item'>
							<EventNote className='sidebar__icon' />
							Manage
						</li>
						<li className='sidebar__item'>
							<Timeline className='sidebar__icon' />
							Analytics
						</li>
						<li className='sidebar__item'>
							<Report className='sidebar__icon' />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
