import { Box, Container, Link, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Created by '}
      <Link
        color="inherit"
        href="https://github.com/YuliiaKush"
        target="_blank"
        rel="noreferrer noopener"
      >
        Yuliia Kushnir
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        position: 'fixed',
        bottom: 0,
        width: 1,
        textAlign: 'center',
        backgroundColor: theme => theme.palette.secondary.light,
      }}
    >
      <Container>
        <Copyright />
      </Container>
    </Box>
  );
};