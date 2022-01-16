import { useEffect, useState } from 'react';

const useMediaQuery = () => {
    const getDeviceType = (currentWidth) => {
        const isMobile = currentWidth < 576;
        const isTablet = currentWidth >= 576 && currentWidth < 992;
        const isDesktop = currentWidth >= 992;

        return isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : undefined;
    };

    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        deviceType: getDeviceType(window.innerWidth),
    });

    useEffect(() => {
        const resizeHandler = () => {
            const currentWindowWidth = window.innerWidth;
            const deviceType = getDeviceType(currentWindowWidth);
            setState({ windowWidth: currentWindowWidth, deviceType });
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [state.windowWidth]);

    return state.deviceType;
};

export default useMediaQuery;
