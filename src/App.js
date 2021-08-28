import React from 'react';
import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import Home from './pages/home/Home';
import { UserList } from './pages/userlist/UserList';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import User from './pages/user/User';

export default function App() {
	return (
		<Router>
			<TopBar />
			<div className='container'>
				<Sidebar />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/users'>
						<UserList />
					</Route>
					<Route path='/user/:userId'>
						<User />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
