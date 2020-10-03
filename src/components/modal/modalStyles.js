import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: fixed;
	z-index: 999;
	top:0;
	left:0;
	width:100%;
	height:100vh;
	background-color:${({ theme }) => theme.colors.modalBackground};
	display: flex;
	align-items:center;
	justify-content: center;
	flex-direction:column;
`;
export const ModalContainter = styled.div`
	position: fixed;
	z-index: 9999;
	display: flex;
	flex-direction:column;
	width:30vw;
	height:70vh;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius:8px;

	@media ${({ theme }) => theme.device.mobileS} {
 		width: 100vw;
		height: 100vh;
  }

	@media ${({ theme }) => theme.device.tablet} {
 		width: 60vw;
		height: 80vh;
  }

	@media ${({ theme }) => theme.device.laptop} {
 		width: 50vw;
		height: 80vh;
  }
	@media ${({ theme }) => theme.device.laptopL} {
 		width: 30vw;
		height: 80vh;
  }
		@media ${({ theme }) => theme.device.desktop} {
 		width: 30vw;
		height: 60vh;
  }
`;
export const HeaderModal = styled.div`
	padding: 0% 5% 0% 10%;
	width:100%;
	height:10vh;
	display: flex;
	align-items:center;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
export const TitleModal = styled.h2`
	color:${({ theme }) => theme.colors.textPrimary};
`;

export const CloseButton = styled.div`
	margin:10px;
	padding: 0% 10% 0% 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 50px;
	height: 50px;
	padding: 0%;
	border-radius:none;
	justify-content: center;
	background-color:${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.textPrimary};
`;
