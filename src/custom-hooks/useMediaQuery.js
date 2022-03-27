import { useEffect, useState } from 'react';

const DEVICE_TYPES = {
    mobile: 'Mobile',
    tablet: 'Tablet',
    desktop: 'Desktop',
};

const getDeviceType = (currentWidth) => {
    let deviceType = undefined;

    if (currentWidth < 576) {
        deviceType = DEVICE_TYPES.mobile;
    } else if (currentWidth >= 576 && currentWidth < 992) {
        deviceType = DEVICE_TYPES.tablet;
    } else if (currentWidth >= 992) {
        deviceType = DEVICE_TYPES.desktop;
    }

    return deviceType;
};

/**
 * Custom hook that returns the `deviceType` based on the width of the inner window.
 * @returns deviceType `Mobile`|`Tablet`|`Desktop`
 */
const useMediaQuery = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [deviceType, setDeviceType] = useState(getDeviceType(window.innerWidth));

    const resizeHandler = () => {
        const currentWindowWidth = window.innerWidth;
        const deviceType = getDeviceType(currentWindowWidth);
        setWindowWidth(currentWindowWidth);
        setDeviceType(deviceType);
    };

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [windowWidth]);

    return deviceType;
};

export default useMediaQuery;
