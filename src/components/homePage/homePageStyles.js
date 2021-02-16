import styled, { css } from 'styled-components';
import WelcomeBackground from '../../images/homePage/welcomeBackground.jpg';

export const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${WelcomeBackground});
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;
  width: 50%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.device.mobileS} {
    font-size: 42px;
    width: 90%;
  }
	@media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    font-size: 72px;
  }
`;

export const Paragraph = styled.p`
	width: fil-content;
	text-align: center;
  width: 50%;
	margin:0px;
	color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px ${({ theme }) => theme.colors.border};
	font-size: 24px;

  @media ${({ theme }) => theme.device.mobileS} {
    font-size: 18px;
    width: 90%;
  }
	@media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    font-size: 24px;
  }
`;

export const BoxSection = styled.div`
  width:100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content:center ;
  background-color:${({ theme }) => theme.colors.scdBackground};
  @media ${({ theme }) => theme.device.mobileS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center ;
  }
	@media ${({ theme }) => theme.device.laptop} {
    display: flex;
    align-items: center;
    justify-content:center ;
    flex-direction: row;
  }
`;

export const BoxComponent = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.leftImage && css`
		align-items: flex-end;
    width:40%;

    @media ${({ theme }) => theme.device.mobileS} {
      align-items: center;
    }
	  @media ${({ theme }) => theme.device.laptop} {
      align-items: flex-end;
   }

  `}
  ${props => props.rightImage && css`
		align-items: flex-start;
    width:40%;

    @media ${({ theme }) => theme.device.mobileS} {
      align-items: center;
    }
	  @media ${({ theme }) => theme.device.laptop} {
      align-items: flex-start;
   }
  `}

  @media ${({ theme }) => theme.device.mobileS} {
    width:90%;
  }
	@media ${({ theme }) => theme.device.laptop} {
  width:50%;
  }
`;

export const BoxedTitle = styled.h1`
  font-size: 50px;
  font-weight: 800;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media ${({ theme }) => theme.device.mobileS} {
    text-align: center;
    font-size: 25px;
    width: 90%;
  }
	@media ${({ theme }) => theme.device.laptop} {
    font-size: 50px;
    width: 50%;
  }
`;

export const BoxedParagraph = styled.p`
	width: fil-content;
  text-align: left;
	margin:0px;
  width: 50%;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 24px;

  @media ${({ theme }) => theme.device.mobileS} {
    text-align: center;
    font-size: 12px;
    width: 90%;
  }
	@media ${({ theme }) => theme.device.laptop} {
    font-size: 20px;
    width: 50%;
  }
`;

export const BoxImage = styled.img`
  width:60%;
  height: auto;
  
`;

export const FooterSection = styled.div`
  width:100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content:center ;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const FooterTitle = styled.h1`
  font-size: 24px;
  font-weight: 800;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
