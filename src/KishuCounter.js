import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Mandarin from './mandarin.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
];

const kishuWeight = 45;

function KishuCounter() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Kishu Counter
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          How many Kishu Mandarins has Alex eaten?
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="sm" component="main" alignItems="flex-center">
        {/* <Grid container spacing={5} alignItems="flex-center"> */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={kishuWeight + " lbs of kishus"}
                  titleTypographyProps={{ align: 'center', fontSize: 40}}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.grey[200]
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography variant="h7" color="text.secondary">
                      That's the equivalent of...
                    </Typography>
                  </Box>
                  <ul>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key="1"
                      >
                        {Math.round(kishuWeight / 145 * 100) / 100 + " humans"}
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key="1"
                      >
                        {Math.round(kishuWeight / 700 * 1000) / 1000 + " motorcyles"}
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key="1"
                      >
                        {Math.round(kishuWeight / 2000 * 1000) / 1000 + " tons"}
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key="1"
                      >
                        {Math.round(kishuWeight / 4156 * 1000) / 1000 + " cars"}
                      </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained">
                    -5 lb
                  </Button>
                  <Button fullWidth variant="contained">
                    +5 lb
                  </Button>
                </CardActions>
              </Card>
            {/* </Grid> */}
        </Grid>
      </Container>
      {/* TODO(akrentsel): Add a dialog that shows when "About" is clicked. */}
    </React.Fragment>
  );
}

export default function KishuCounter() {
  return <KishuCounter />;
}