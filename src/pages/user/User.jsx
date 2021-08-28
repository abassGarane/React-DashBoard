import {
	CalendarToday,
	EmailOutlined,
	LocationOnOutlined,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

const User = () => {
	return (
		<div className='user'>
			<div className='user__title__container'>
				<h1 className='user__title--details'>Edit User</h1>
				<Link to='/newuser'>
					<button className='user__btn'>Create User</button>
				</Link>
			</div>
			<div className='user__container'>
				<div className='user__details'>
					<div className='user__details--top'>
						<img
							src='https://images.unsplash.com/photo-1629986604004-760253bbf29c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
							alt=''
							className='user__img'
							// conflicting css names
						/>
						<div className='user__top--title'>
							<span className='user__name'>James Patterson</span>
							<span className='user__job--title'>Author</span>
						</div>
					</div>
					<div className='user__details--bottom'>
						<span className='user__title'>Account Details</span>
						<div className='user__details--info'>
							<PermIdentity className='user__details--icon' />
							<span className='user__userdetail'>james@wild</span>
						</div>
						<div className='user__details--info'>
							<CalendarToday className='user__details--icon' />
							<span className='user__userdetail'>12/03/1956</span>
						</div>
						<span className='user__title'>Contact Details</span>

						<div className='user__details--info'>
							<PhoneAndroid className='user__details--icon' />
							<span className='user__userdetail'>+1234 7278 999</span>
						</div>
						<div className='user__details--info'>
							<EmailOutlined className='user__details--icon' />
							<span className='user__userdetail'>james@wild.com</span>
						</div>
						<div className='user__details--info'>
							<LocationOnOutlined className='user__details--icon' />
							<span className='user__userdetail'>Texas|USA</span>
						</div>
					</div>
				</div>
				<div className='user__update'>
					<span className='user__update--title'>Edit</span>
					<form className='user__update--form'>
						<div className='left'>
							<div className='user__item'>
								<label>Username</label>
								<input
									type='text'
									className='user__input'
									placeholder='james@wild'
								/>
							</div>
							<div className='user__item'>
								<label>Full Name</label>
								<input
									type='text'
									className='user__input'
									placeholder='James Patterson'
								/>
							</div>
							<div className='user__item'>
								<label>Email</label>
								<input
									type='email'
									className='user__input'
									placeholder='james@wild.com'
								/>
							</div>
							<div className='user__item'>
								<label>Phone</label>
								<input
									type='text'
									className='user__input'
									placeholder='+6256 6577 728729'
								/>
							</div>
							<div className='user__item'>
								<label>Adress</label>
								<input
									type='text'
									className='user__input'
									placeholder='Texas|USA'
								/>
							</div>
						</div>
						<div className='right'>
							<div className='user__update--upload'>
								<img
									src='https://images.unsplash.com/photo-1629986604004-760253bbf29c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
									alt=''
									className='user__upload'
								/>
								<label htmlFor='file'>
									<Publish className='upload__icon' />
								</label>
								<input type='file' id='file' style={{ display: 'none' }} />
							</div>
							<button className='user__upload--btn'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
