import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export const FooterDesktop = () => {
  return (
    <Box component="footer" sx={footerStyles}>
      <Box sx={textureOverlayStyles} />
      <Box sx={contentWrapperStyles}>
        <Box sx={leftSectionStyles}>
          <Typography variant="h1" sx={companyNameStyles}>
            RhodesCode
          </Typography>
          <Typography variant="body2" sx={copyStyles}>
            Thanks for stopping by! I hope you have a great day.
          </Typography>
        </Box>
        <Box sx={rightSectionStyles}>
          <Button
            component="a"
            href="https://www.linkedin.com/in/williamrhodespvamu/"
            target="_blank"
            rel="noopener noreferrer"
            sx={bubbleButtonStyles}
          >
            LinkedIn
          </Button>
          <Button
            component="a"
            href="mailto:wtrhodes02@gmail.com"
            sx={bubbleButtonStyles}
          >
            Email
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const footerStyles = {
  position: 'relative',
  backgroundImage: "url('/metal.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  p: 4,
  overflow: 'hidden',
  color: '#fff',
};

const textureOverlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 0,
};

const contentWrapperStyles = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const leftSectionStyles = {
  flex: '1 1 auto',
};

const companyNameStyles = {
  m: 0,
  fontSize: '2.5rem', 
  fontWeight: 700, 
  letterSpacing: '5px',
};

const copyStyles = {
  fontSize: '0.9rem',
  mt: 1,
};

const rightSectionStyles = {
  flex: '1 1 auto',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 2,
};

const bubbleButtonStyles = {
  backgroundColor: '#fff',
  color: '#050522',
  borderRadius: '50px',
  fontWeight: 600,
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  textTransform: 'none',
  textDecoration: 'none',
  px: 3,
  py: 1.25, 
  fontSize: '1.1rem', 
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
};

export default FooterDesktop;
