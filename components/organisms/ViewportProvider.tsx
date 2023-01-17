import React from 'react';

type widthType = number | undefined;

interface ViewportProviderProps {
    children: JSX.Element;
}

const viewportContext = React.createContext<widthType>(0);

const ViewportProvider = ({ children }: ViewportProviderProps) => {
    const [width, setWidth] = React.useState<widthType>(undefined);

    React.useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
}, []);

  return (
    <viewportContext.Provider value={width}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
    const width = React.useContext(viewportContext);
    return width;
};

export default ViewportProvider;
