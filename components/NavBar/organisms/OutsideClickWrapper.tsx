import { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface MainContainerProps {
  closeMenu: () => void;
  children: JSX.Element;
}

const WrapperStyled = styled.div`
  height: 84px;
`;

const MobileNavbarOutsideClickWrapper = ({ closeMenu, children }: MainContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: { target: any; }) => {
      if (!ref.current) { return; }

      if (!ref.current.contains(event.target)) {
        closeMenu();
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return <WrapperStyled ref={ref}>{children}</WrapperStyled>;
};

export default MobileNavbarOutsideClickWrapper;
