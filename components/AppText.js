import { Text } from 'react-native';
import { FONT_FAMILY } from '../styles/typography';

export default function AppText({ variant = 'body', style, children, ...props }) {
  const base = {
    title: {
      fontFamily: FONT_FAMILY.title,
    },
    subheading: {
      fontFamily: FONT_FAMILY.subheading,
    },
    body: {
      fontFamily: FONT_FAMILY.body,
    },
  };

  return (
    <Text style={[base[variant], style]} {...props}>
      {children}
    </Text>
  );
}
