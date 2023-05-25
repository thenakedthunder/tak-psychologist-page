import { useRef, useEffect } from 'react';

interface MainContainerProps {
  closeMenu: () => void;
  children: JSX.Element;
}

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

  return <div ref={ref}>{children}</div>;
};

export default MobileNavbarOutsideClickWrapper;
