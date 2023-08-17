import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '.strikethrough': {
        textDecoration: 'line-through',
      },
      '.transition': {
        transition: 'transform .2s ease, -webkit-transform .2s ease',
        transform: 'translateY(100%)',
      },
    },
  },
  colors: {
    brand: {
      primary: '#121212',
      primaryLight: '#ffffff',
      secondary: '#000000',
      muted: '#888888',
      important: '#d32d1f',
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: '500',
        color: 'brand.primary',
      },
      sizes: {
        h1: {
          fontSize: '1.5rem',
          lineHeight: '1.2',
        },
        body1: {
          fontSize: '0.875rem',
          lineHeight: '1.5',
        },
        body2: {
          fontSize: '0.75rem',
          lineHeight: '1.5',
        },
        body3: {
          fontSize: '0.625rem',
          lineHeight: '1.5',
        },
      },
      variants: {
        dark: {
          color: 'brand.primary',
        },
        grey: {
          color: 'brand.muted',
        },
        red: {
          color: 'brand.important',
        },
      },
    },
    Link: {
      baseStyle: {
        textDecoration: 'underline',
        fontSize: '12px',
        paddingTop: '3px',
        paddingBottom: '1px',
        color: 'brand.secondary',
      },
    },
    Labels: {
      baseStyle: {
        fontWeight: '500',
        color: 'brand.primaryLight',
      },
      variants: {
        exclusive: {
          backgroundColor: '',
        },
        sustainable: {
          backgroundColor: '',
        },
      },
    },
  },
});

export default theme;
