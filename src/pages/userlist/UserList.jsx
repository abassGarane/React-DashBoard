import './userlist.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows as rows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const UserList = () => {
	const [data, setData] = useState(rows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const columns = [
		{ field: 'id', headerName: 'ID', width: 50 },
		{
			field: 'user',
			headerName: 'User name',
			width: 180,
			editable: true,
			renderCell: (params) => {
				return (
					<div className='userlist__user'>
						<img className='userlist__img' src={params.row.avatar} alt='' />
						{params.row.userName}
					</div>
				);
			},
		},
		{
			field: 'lastName',
			headerName: 'Last name',
			width: 160,
			editable: true,
		},
		{
			field: 'email',
			headerName: 'Email',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
		},
		{
			field: 'status',
			headerName: 'Status',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
		},
		{
			field: 'transaction',
			headerName: 'Transaction',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 160,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/user/' + params.row.id}>
							<button className='userlist__btn'>Edit</button>
						</Link>
						<DeleteOutline
							className='userlist__btn--delete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className='userlist'>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={10}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};
