import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
	position: fixed;
	z-index: 999;
	top:0;
	left:0;
	width:100%;
	height:100vh;
	background-color:rgba(0,0,0,0.8);
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
	background-color: ${({ theme }) => theme.colors.white};
	border-radius:8px;

	@media ${({ theme }) => theme.device.mobile} {
 		width:90vw;
		height: 80vh;
  }

	@media ${({ theme }) => theme.device.laptop} {
 		width:80vw;
		height:20vh;
  }
	@media ${({ theme }) => theme.device.laptopL} {
 		width:80vw;
		height: 90vh;
  }
`;

const Modal = ({ children, open }) => (
	<div>
		{open === true
			&& <ModalWrapper>
				<ModalContainter>
					{children}
				</ModalContainter>
			</ModalWrapper>
		}
	</div>
);

export default Modal;
