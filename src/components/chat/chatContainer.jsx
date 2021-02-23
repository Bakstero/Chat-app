import React from 'react';
import ChatsList from './chatsList';
import { ChatContainerWrapper } from './styleChat';

export const ChatContainerOffMobile = () => (
	<ChatContainerWrapper Mobile>
		<ChatsList/>
	</ChatContainerWrapper>
);

export const ChatContainer = () => (
	<ChatContainerWrapper>
		<ChatsList />
	</ChatContainerWrapper>
);
