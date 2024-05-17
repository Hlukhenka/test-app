import { Container } from '../Container/Container';
import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/eventBoard">Event</StyledLink>
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};
