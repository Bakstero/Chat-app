import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ScrollWrapper = styled.div`
	width:1px;
	height:1px;
`;

const ScrollBottom = () => {
	const messagesRef = useRef(null);

	useEffect(() => {
		messagesRef.current.scrollIntoView({
			behavior: 'smooth',
		});
	});

	return <ScrollWrapper ref={messagesRef} />;
};

export default ScrollBottom;
