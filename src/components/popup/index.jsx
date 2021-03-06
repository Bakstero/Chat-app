import React from 'react';
import styled from 'styled-components';

const PopupWrapper = styled.div`
	position: absolute;
	width:220px;
	height:auto;
	background-color:${({ theme }) => theme.colors.background};
	border-radius: 5px;
	box-shadow: 0px 2px 10px 0px ${({ theme }) => theme.colors.border};
	margin: 15px 0px 0px -190px;
	z-index: 10;
`;

const Popup = ({ children, open }) => (
	<div>
		{open === true
			&& <PopupWrapper>
				{children}
			</PopupWrapper>
		}
	</div>
);

export default Popup;
