import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addUsersPrm, removeUsersPrm, allUsersPrm } from '../../../shared/chat/createChatSlice';

export const Wrapper = styled.div`
	width: 100%;
	height: 75px;
	background-color:${({ theme }) => theme.colors.scdBackground};
	display: flex;
	align-items: center;
	margin: 10px 0px 10px 0px;
	padding:10px;
	cursor: pointer;
	${props => props.active && css`
		background-color:${({ theme }) => theme.colors.background};
  `}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justyfi-content: center;
`;

export const UserAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 12px;
`;

export const UserName = styled.span`
	margin-left: 20px;
	color:${({ theme }) => theme.colors.textPrimary};
	font-weight:${({ theme }) => theme.fontWeight.regular};
	font-size:${({ theme }) => theme.fontSize.small};
`;

const UserItem = ({ userItem: { id, name, avatar } }) => {
	const dispatch = useDispatch();
	const users = useSelector(allUsersPrm);
	const [active, setActive] = useState(false);

	const ManageUserPermision = uid => {
		if (users.some(item => item === uid)) {
			dispatch(removeUsersPrm(uid));
			setActive(false);
		} else {
			dispatch(addUsersPrm(uid));
			setActive(true);
		}
	};

	return (
		<>
			{active === false
				? (<Wrapper onClick={() => ManageUserPermision(id)}>
					<Container >
						<UserAvatar src={avatar} alt={name} />
						<UserName >{name}</UserName>
					</Container>
				</Wrapper>
				) : (
					<Wrapper active onClick={() => ManageUserPermision(id)}>
						<Container>
							<UserAvatar src={avatar} alt={name} />
							<UserName >{name}</UserName>
						</Container>
					</Wrapper>
				)}
		</>
	);
};

export default UserItem;
