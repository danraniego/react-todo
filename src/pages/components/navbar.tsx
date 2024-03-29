import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';

export default function Navbar() {
  return (
    <AppBar position="static" style={{ height: '4rem'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
