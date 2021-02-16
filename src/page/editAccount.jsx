import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/layout';
import NewUserName from '../components/updateUserData/newUserName';
import { ChatContainerOffMobile } from '../components/chat/chatContainer';

const Wrapper = styled.div`
	width:60%;
	height:100%;
	display:flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media ${({ theme }) => theme.device.mobileS} {
 		margin-top: 12vh;
		width:100%;
  }
	@media ${({ theme }) => theme.device.mobileM} {
 		margin-top: 10vh;
  }
	@media ${({ theme }) => theme.device.tablet} {
 		margin-top: 8vh;
		width:60%;
  }
	@media ${({ theme }) => theme.device.laptop} {
 	margin-top: 9vh;
  }
	@media ${({ theme }) => theme.device.laptopL} {
 	margin-top: 8vh;
  }
	@media ${({ theme }) => theme.device.desktop} {
 	margin-top: 6vh;
  }
`;

const EditAccount = () => (
	<Layout>
		<Wrapper>
			<ChatContainerOffMobile />
			<NewUserName/>
		</Wrapper>
	</Layout>
);
export default EditAccount;
