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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import db from './firebase';
import { updateDoc, doc, onSnapshot } from "firebase/firestore"; 

const akrentsel = doc(db, "kishucounters", "akrentsel");

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


// Firestore CRUD examples: https://www.bezkoder.com/react-firestore-crud/

class KishuCounterContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {kishuWeight: 0, aboutOpen: false}

        // TODO(akrentsel): Add a loading state.
    }

    handleUpdate = (doc) => {
        this.setState({kishuWeight: doc.data().kishuWeight})
    }

    incrementKishuWeight = () => {
        updateDoc(akrentsel, {kishuWeight: this.state.kishuWeight + 1});
    }

    decrementKishuWeight = () => {
        updateDoc(akrentsel, {kishuWeight: this.state.kishuWeight - 1});
    }

    handleClickOpen = () => {
        this.setState({aboutOpen: true});
    };

    handleClickClose = () => {
        this.setState({aboutOpen: false});
    };

    // Subscribe for live updates on the value of the kishuCounter.
    componentDidMount() {
        this.unsub = onSnapshot(akrentsel, this.handleUpdate)
    }

    // Unsubscribe from live updates, to conserve bandwidth.
    componentWillUnmount() {
        this.unsub();
    }

    render() {
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
                    <Button onClick={this.handleClickOpen}>About</Button>
                </nav>
                </Toolbar>
            </AppBar>
            {/* Hero unit */}
            <Container disableGutters maxWidth="md" component="main" sx={{ pt: 6, pb: 4 }}>
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
            <Container maxWidth="sm" component="main" alignitems="flex-center" sx={{ pb: 6 }}>
                    <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    >
                    <Card>
                        <CardHeader
                        title={this.state.kishuWeight + " lbs of kishus"}
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
                                {Math.round(this.state.kishuWeight / 145 * 100) / 100 + " humans"}
                            </Typography>
                            <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                                key="2"
                            >
                                {Math.round(this.state.kishuWeight / 700 * 1000) / 1000 + " motorcyles"}
                            </Typography>
                            <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                                key="3"
                            >
                                {Math.round(this.state.kishuWeight / 2000 * 1000) / 1000 + " tons"}
                            </Typography>
                            <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                                key="4"
                            >
                                {Math.round(this.state.kishuWeight / 4156 * 1000) / 1000 + " cars"}
                            </Typography>
                        </ul>
                        </CardContent>
                        <CardActions>
                        <Button fullWidth variant="contained" onClick={this.decrementKishuWeight}>
                            -1 lb
                        </Button>
                        <Button fullWidth variant="contained" onClick={this.incrementKishuWeight}>
                            +1 lb
                        </Button>
                        </CardActions>
                    </Card>
                    {/* </Grid> */}
                </Grid>
            </Container>
            <BootstrapDialog
                onClose={this.handleClickClose}
                aria-labelledby="customized-dialog-title"
                open={this.state.aboutOpen}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClickClose}>
                About
                </BootstrapDialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    This site lets me (and you) keep track of how many pounds of <a href={"https://whiteonricecouple.com/kishu-mandarins/"} target="_blank">kishu mandarins</a> I've had. They're fantastic. If you want to try some, I recommend purchasing them at <a href={"https://www.montereymarket.com/"} target="_blank">Monterey Market</a>, though they are only available January-February.
                </Typography>
                <Typography gutterBottom>
                    Made with &#x2764;&#xFE0F; by Alex Krentsel in Berkeley, CA. April 2022.
                </Typography>
                </DialogContent>
            </BootstrapDialog>
            </React.Fragment>
        );
    }
}

export default function KishuCounter() {
  return <KishuCounterContent />;
}