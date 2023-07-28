import Link from 'next/link';

interface PsychoLinkProps {
  href: string;
  children: string | JSX.Element;
  openOnNewTab?: boolean
}

const PsychoLink = ({ href, children, openOnNewTab }: PsychoLinkProps) => (
  <Link
    href={href}
    passHref
    target={openOnNewTab ? '_blank' : ''}
  >
    {children}
  </Link>
);

export default PsychoLink;
