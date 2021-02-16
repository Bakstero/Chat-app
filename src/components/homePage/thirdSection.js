import React from 'react';
import {
	BoxedTitle, BoxSection, BoxedParagraph, BoxComponent, BoxImage,
} from './homePageStyles';
import SocialMediaImage from '../../images/homePage/SocialMediaImage.png';

const ThirdSection = () => (
	<BoxSection>
  		<BoxComponent>
			<BoxedTitle>Where hanging out is easy</BoxedTitle>
			<BoxedParagraph>
        Grab a seat in a voice channel when you’re free.
        Friends in your server can see you’re around and instantly pop in
        to talk without having to call.
			</BoxedParagraph>
		</BoxComponent>
		<BoxComponent rightImage>
			<BoxImage src={SocialMediaImage} />
		</BoxComponent>
	</BoxSection>
);

export default ThirdSection;
