import React, { useState, useEffect } from 'react';
import { Card, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { axiosWithAuth } from "../utils/axiosWithAuth";

import './FriendsList.css';

const FriendsList = () => {
	const [friends, setFriends] = useState([])
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axiosWithAuth().get('/friends')
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err);
			})
		setIsLoading(false);
	}, [])

	return (
		<>
			<h1>Friends</h1>
			<Link to='/addfriend'><Button color='warning'>Add a friend</Button></Link>
			<div className='friend_cont'>
				{friends.map((friend) => (
					<Card>
						<CardBody>
							<CardTitle>{friend.name} | {friend.age}</CardTitle>
							<CardSubtitle>{friend.email}</CardSubtitle>
						</CardBody>
					</Card>
				))}
			</div>
		</>
	)
}

export default FriendsList;