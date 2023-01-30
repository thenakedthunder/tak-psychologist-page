import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.a`
    color: inherit;
    cursor: pointer;
    text-decoration: none;
`;

interface PsychoLinkProps {
  href: string;
  children: string | JSX.Element;
}

const PsychoLink = ({ href, children }: PsychoLinkProps) => (
  <Link href={href} passHref>
    <StyledLink>
      {children}
    </StyledLink>
  </Link>
);

export default PsychoLink;
