import React from 'react';
import {
	BoxedTitle, BoxSection, BoxedParagraph, BoxComponent, BoxImage,
} from './homePageStyles';
import CartoonGirl from '../../images/homePage/CartoonGirlBox.png';

const ScdSection = () => (
	<BoxSection>
		<BoxComponent leftImage>
			<BoxImage src={CartoonGirl} />
		</BoxComponent>
		<BoxComponent>
			<BoxedTitle>An invite-only place with plenty of room to write</BoxedTitle>
			<BoxedParagraph>
        Chatly servers are organized into topic-based channels where you can collaborate,
         share, and just write about your day without clogging up a group chat.
			</BoxedParagraph>
		</BoxComponent>
	</BoxSection>
);

export default ScdSection;
