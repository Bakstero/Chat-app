import React from 'react';
import ReactDom from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import {
	ModalWrapper,
	ModalContainter,
	HeaderModal,
	TitleModal,
	CloseButton,
} from './modalStyles';

const Modal = ({
	children, open, close, title,
}) => ReactDom.createPortal(
	<>
		{open === true
		&& <ModalWrapper>
			<ModalContainter>
				<HeaderModal>
					<TitleModal>{title}</TitleModal>
					<CloseButton onClick={close}>
						<AiOutlineClose size={'30px'} />
					</CloseButton>
				</HeaderModal>
				{children}
			</ModalContainter>
		</ModalWrapper>
		}
	</>,
	document.getElementById('modal'),
);

export default Modal;
