import React from 'react';
import {
	ItemWrapper,
	UserAvatar,
	UserName,
	ItemContainer,
} from './styleUsers';

const UserItem = ({ userItem: { id, name, avatar } }) => (
	<ItemWrapper to={`/user/${id}`}>
		<ItemContainer>
			<UserAvatar src={avatar} alt='' />
		</ItemContainer>
		<ItemContainer text>
			<UserName >{name}</UserName>
		</ItemContainer>
	</ItemWrapper>
);

export default UserItem;
