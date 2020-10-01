import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-top:7vh;
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction:column;
	background-color:${({ theme }) => theme.colors.scdBackground};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
  }
	@media ${({ theme }) => theme.device.mobileL} {
		width: 60%;
		padding-left:0vh;
  }
		@media ${({ theme }) => theme.device.tablet} {
		width: 60%;
		padding-left:0vh;
		height: 100vh;
  }
`;
export const FormContainer = styled.form`
	padding: 5px;
	display: flex;
	align-items:center;
	justify-content: center;
`;

export const NewChatInput = styled.input`
	border: 1px solid ${({ theme }) => theme.colors.border};
	margin-left: 15px;
	width:100%;
	border-radius: 10px;
	padding: 10px;
	outline:none;
	::placeholder {
  	color: ${({ theme }) => theme.colors.textPrimary};
	}
`;

export const CreateButton = styled.button`
	margin-left: 15px;
	width: 120px;
	height: 50px;
	padding: 0%;
	border:none;
	border-radius:12px;
	background:none;
	color: ${({ theme }) => theme.colors.textPrimary};
	cursor: pointer;
	outline:none;
	display:flex;
	align-items:center;
	justify-content:center;
	:hover {
		border: 1px solid ${({ theme }) => theme.colors.border}
	}
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100px;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 120px;

	}
`;
