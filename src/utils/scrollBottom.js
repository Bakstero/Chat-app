import React, { useEffect, useRef } from 'react';

const ScrollBottom = () => {
	const messagesRef = useRef(null);

	useEffect(() => {
		messagesRef.current.scrollIntoView({
			behavior: 'smooth',
		});
	});

	return <div ref={messagesRef} />;
};

export default ScrollBottom;
