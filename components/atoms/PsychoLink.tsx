import Link from 'next/link';

interface PsychoLinkProps {
  href: string;
  children: string | JSX.Element;
}

const PsychoLink = ({ href, children }: PsychoLinkProps) => (
  <Link href={href} passHref>
    {children}
  </Link>
);

export default PsychoLink;
