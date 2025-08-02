import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const blobSvg = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#E0ECFF" d="M33.4,-59.6C40.2,-54,40.5,-38.8,46.4,-27.2C52.2,-15.7,63.7,-7.8,62.4,-0.7C61.1,6.3,47.1,12.7,40.7,23.4C34.4,34.2,35.8,49.3,30.3,55.1C24.8,60.8,12.4,57.2,1.7,54.1C-8.9,51.1,-17.8,48.7,-29.5,46.5C-41.1,44.3,-55.5,42.3,-57.5,34.6C-59.5,26.9,-49.1,13.4,-47.3,1C-45.5,-11.4,-52.3,-22.7,-49.5,-29C-46.6,-35.3,-34.2,-36.5,-24.3,-40.3C-14.5,-44.1,-7.2,-50.5,3,-55.8C13.3,-61,26.6,-65.1,33.4,-59.6Z" transform="translate(100 100)" />
</svg>
`;

export default function BackgroundBlob({ children }) {
    return (
        <View style={styles.blobWrapper}>
            <SvgXml xml={blobSvg} width={460} height={460} />
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    blobWrapper: {
        width: 260,
        height: 260,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    content: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
