import React from 'react';
import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import Home from './pages/home/Home';

export default function App() {
	return (
		<div>
			<TopBar />
			<div className='container'>
				<Sidebar />
				<Home />
			</div>
		</div>
	);
}
