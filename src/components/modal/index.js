import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';

const ModalWrapper = styled.div`
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
const ModalContainter = styled.div`
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

const Modal = ({ children, open }) => ReactDom.createPortal(
	<>
		{open === true
		&& <ModalWrapper>
			<ModalContainter>
				{children}
			</ModalContainter>
		</ModalWrapper>
		}
	</>,
	document.getElementById('modal'),
);

export default Modal;
