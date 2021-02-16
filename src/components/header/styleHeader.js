import styled from 'styled-components';
import { ReactComponent as LogoText } from '../../images/logo/LogoText.svg';

export const Wrapper = styled.header`
	position:fixed;
	width: 100vw;
	height: 6vh;
	z-index:999;
	top:0;
	left:0;
	background-color:rgba(255,255,255,.9);
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};

	@media ${({ theme }) => theme.device.mobileS} {
 		height: 10vh;
  }
	@media ${({ theme }) => theme.device.mobileM} {
 		height: 8vh;
  }
	@media ${({ theme }) => theme.device.tablet} {
 		height: 6vh;
  }
	@media ${({ theme }) => theme.device.laptop} {
 	height: 7vh;
  }
	@media ${({ theme }) => theme.device.laptopL} {
 	height: 6vh;
  }
	@media ${({ theme }) => theme.device.desktop} {
 	height: 4vh;
  }
`;

export const Nav = styled.div`
	width: 100%;
	height:100%;
	display: flex;
	flex-direction:row;
	justify-content: space-between;
	align-items: center;
	padding: 0% 18% 0% 5%;
	@media ${({ theme }) => theme.device.mobileS} {
 		padding: 0% 18% 0% 5%;
  }
	@media ${({ theme }) => theme.device.laptop} {
 		padding: 0% 10% 0% 5%;
  }
`;

export const AuthDiv = styled.div`
	display: flex;
	width: 20%;
	flex-direction:row;
	justify-content: center;
	align-items: center;
`;

export const TextLogo = styled(LogoText)`
	width: 200px;
	height: 40px;
	fill: ${({ theme }) => theme.colors.LogoColor};

	@media ${({ theme }) => theme.device.mobileS} {
  	width: 100px;
		height: 25px;
  }
	@media ${({ theme }) => theme.device.mobileL} {
  	width: 150px;
		height: 30px;
  }
	@media ${({ theme }) => theme.device.tablet} {
  	width: 150px;
		height: 30px;
  }
`;
