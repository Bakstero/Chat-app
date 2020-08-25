import React from 'react';
import { Pane } from 'evergreen-ui';
import ChatsList from '../features/getChatList/chatsList';

// must import firebase.firestore

const HomePage = () => (
	<Pane>
		<Pane padding="10px">
			<ChatsList/>
		</Pane>
	</Pane>
);

export default HomePage;
/*
	const testtt = useSelector(messageToSend)
	console.log(testtt);
	const GetAllUsers = () => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
	db.collection('users').get()
	.then(querySnapshot => {
		querySnapshot.forEach(doc => {
			const posts = querySnapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data(),
			}))
			console.log(posts);
			setPosts(posts);
		});
	});
	}, [])
	return po
	*/

/*

const GetAllUsers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		db.collection('users')
			.onSnapshot(querySnapshot => {
				const usersDocs = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				setUsers(usersDocs);
			});
	}, []);
	return users;
};
*/
