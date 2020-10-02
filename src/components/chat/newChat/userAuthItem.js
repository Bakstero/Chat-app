import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addUserAuthSuccess } from '../../../shared/chat/createChatSlice';

export const Wrapper = styled.div`
	width: 100%;
	height: 75px;
	background-color:${({ theme }) => theme.colors.background};
	display: flex;
	align-items: center;
	margin: 10px 0px 10px 0px;
	padding:10px;
	cursor: pointer;
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

	return (
		<Wrapper onClick={() => dispatch(addUserAuthSuccess(id))}>
			<Container>
				<UserAvatar src={avatar} alt='' />
				<UserName >{name}</UserName>
			</Container>
		</Wrapper>
	);
};

export default UserItem;
