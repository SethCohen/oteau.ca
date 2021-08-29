import * as React from "react"
import WidgetBot from '@widgetbot/react-embed'
import {
    AppBar,
    createTheme,
    CssBaseline,
    Fab,
    Grid,
    Link,
    makeStyles,
    MuiThemeProvider,
    Paper,
    responsiveFontSizes,
    SvgIcon,
    Toolbar,
    Typography,
    useScrollTrigger, withStyles,
    Zoom
} from "@material-ui/core";
import {StaticImage} from "gatsby-plugin-image";
import Twitter from "../assets/socials/twitter.svg";
import Instagram from "../assets/socials/instagram.svg";
import Discord from "../assets/socials/discord.svg";
import Email from "../assets/socials/email.svg";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import scrollTo from "gatsby-plugin-smoothscroll";
import Github from "../assets/socials/github.svg";

const theme = createTheme({
    palette: {
        type: "dark",
        text: {
            primary: "#fff",
            secondary: "#000"
        },
        primary: {
            main: "#fff"
        },
        secondary: {
            main: "rgba(5,5,5,0.95)"
        },
        error: {
            main: "rgb(0,123,255)"
        },
        background: {
            default: "rgb(40,40,40)"
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*::-webkit-scrollbar': {
                    width: '0.75em'
                },
                '*::-webkit-scrollbar-track': {
                    background: "#060809",
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: '#090b0c',
                    border: '1px solid #797062',
                },
                '*::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#4e555a',
                }

            }
        }
    }
})

const useStyles = makeStyles((theme) => ({
    appbar: {
        alignItems: "center",
        transition: "0.5s all"
    },
    padding: {
        margin: "5% 0",
        minHeight: "100vh",
    },
    zoom: {
        position: 'fixed',
        bottom: theme.spacing(1.5),
        right: theme.spacing(1.5),
    },
    image: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/dPUWgZLsOk8/1920x1080)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "100vh"
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.40)',
    },
    headerContent: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(20),
        },
    },
    toolbar: theme.mixins.toolbar,
}));

function ScrollTop(props) {
    const {children} = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Zoom in={trigger}>
            <div onClick={() => scrollTo("#home")} role="presentation" className={classes.zoom}>
                {children}
            </div>
        </Zoom>
    );
}

function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        React.cloneElement(children, {
            color: trigger ? "secondary" : "transparent",
        })
    );
}

const CustomLink = withStyles({
    root: {
        fontVariant: "small-caps",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        color: "rgba(255,255,255,0.65)",
        '&::before': {
            cursor: "pointer",
            content: '""',
            position: "absolute",
            bottom: "0",
            height: "2px",
            width: "100%",
            left: "0",
            backgroundColor: "#1f4e8b",
            transform: "scaleX(0)",
            transition: ".3s ease-out .1s all",
        },
        '&:hover::before': {
            cursor: "pointer",
            visibility: "visible",
            width: "120%",
            left: "-10%",
            transform: "scaleX(1)"
        },
        '&:hover': {
            color: "#fff"
        }
    },
})(Link);


const IndexPage = (props) => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={responsiveFontSizes(theme)}>
            <main>
                <title>OTeaU</title>
                <CssBaseline/>

                <ElevationScroll {...props}>
                    <AppBar
                        elevation={0}
                        className={classes.appbar}
                    >
                        <Toolbar style={{minWidth: "100vw", alignItems: "center", justifyContent: "center"}}>
                            <Grid container direction={"row"} justifyContent={"center"} xs={6} spacing={4}>
                                <Grid item>
                                    <CustomLink underline="none" onClick={() => scrollTo("#home")} variant={"h6"}>
                                        Home
                                    </CustomLink>
                                </Grid>
                                <Grid item>
                                    <CustomLink underline="none" onClick={() => scrollTo("#about-us")} variant={"h6"}>
                                        About Us
                                    </CustomLink>
                                </Grid>
                                <Grid item>
                                    <CustomLink underline="none" onClick={() => scrollTo("#how-to-join")}
                                                variant={"h6"}>
                                        How To Join
                                    </CustomLink>
                                </Grid>
                                <Grid item>
                                    <CustomLink underline="none" onClick={() => scrollTo("#discord")} variant={"h6"}>
                                        Discord
                                    </CustomLink>
                                </Grid>
                                <Grid item>
                                    <CustomLink underline="none" onClick={() => scrollTo("#sponsors")} variant={"h6"}>
                                        Our Sponsors
                                    </CustomLink>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>

                </ElevationScroll>

                <Paper
                    className={classes.image}
                    elevation={5}
                    id={"home"}
                    square
                >
                    <div className={classes.overlay}/>
                    <Grid
                        className={classes.headerContent}
                        style={{paddingTop: "10%", margin: "0"}}
                        container
                        spacing={3}
                        xs={12}
                        justifyContent={"center"}
                        alignItems={"center"}
                        direction={"column"}
                    >
                        <StaticImage
                            src="../assets/images/banner.png"
                            height={"50%"}
                            alt={"Banner"}
                        />
                        <Grid item xs={6}>
                            <Paper
                                style={{
                                    padding: "0.5em 2em",
                                    borderRadius: "10em",
                                    background: "rgba(0,0,0,0.25)",
                                }}
                                elevation={0}
                            >
                                <Typography variant={"h6"} align={"center"}>
                                    The Official Ontario Tech University Tea Club
                                </Typography>
                            </Paper>
                            <Grid
                                container
                                justifyContent={"center"}
                                spacing={3}
                                direction={"row"}
                                style={{marginTop: "0.1vh"}}
                            >
                                <Grid item>
                                    <a href={"https://twitter.com/@OTeaU3"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Twitter"
                                    >
                                        <SvgIcon color="primary" component={Twitter}/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={"https://discord.gg/ThKymzr"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Discord"
                                    >
                                        <SvgIcon color="primary" component={Discord}/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={"https://www.instagram.com/oteau_/"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Instagram"
                                    >
                                        <SvgIcon color="primary" component={Instagram}/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={"mailto:ontarioteau@gmail.com"}
                                       aria-label="Mail"
                                    >
                                        <SvgIcon color="primary" component={Email}/>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                <Grid
                    container
                    spacing={3}
                    xs={12}
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Grid
                        item
                        id={"about-us"}
                        xs={6}
                        className={classes.padding}
                    >
                        <div className={classes.toolbar}/>
                        <Paper
                            style={{
                                padding: "0.5em 2em",
                                borderRadius: "10em",
                                background: "rgba(0,0,0,0.25)",
                                marginBottom: "1em"
                            }}
                            elevation={0}
                        >
                            <Typography variant={"h4"} align={"center"}>
                                <Link href={"#about-us"}>
                                    About Us
                                </Link>
                            </Typography>
                        </Paper>
                        <Grid container item direction={"row"} spacing={2}>
                            <Grid item xs>
                                <Typography variant={"h6"} align={"center"}>
                                    Tea club was founded in the Fall of 2019 with the goal of bringing tea to everyone,
                                    meeting new people, providing a safe space to all, and just having fun. Since then,
                                    our club has grown to hundreds of people.
                                    <br/>
                                    <br/>
                                    We host a variety of events here at tea club that could be anything from games or
                                    movie nights to simply just socializing or providing a place to study. Of course,
                                    all of them catered with tea.
                                    <br/>
                                    <br/>
                                    Come join us for tea tastings, giveaways, exchanges, and conversation, or to just
                                    relax and de-stress from uni life with a hot cup of tea!
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>
                                    <StaticImage src={"../assets/images/matcha.png"} alt={"Tea"}
                                                 imgStyle={{borderRadius: "4px"}}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        id={"how-to-join"}
                        xs={6}
                        className={classes.padding}
                    >
                        <div className={classes.toolbar}/>
                        <Paper
                            style={{
                                padding: "0.5em 2em",
                                borderRadius: "10em",
                                background: "rgba(0,0,0,0.25)",
                                marginBottom: "1em"
                            }}
                            elevation={0}
                        >
                            <Typography variant={"h4"} align={"center"}>
                                <Link href={"#how-to-join"}>
                                    How To Join
                                </Link>
                            </Typography>
                        </Paper>
                        <Typography variant={"h6"} align={"center"}>
                            We provide a variety of ways to keep yourself updated with club events.<br/>
                            If you'd like to formally join the club, feel free to fill out <Link
                            href={"#"}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Membership Application"
                            color={"error"}
                        >
                            this form</Link>.
                            <br/><br/>
                            We highly recommend joining us on <Link
                            href={"https://discord.gg/ThKymzr"}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Discord"
                            color={"error"}
                        >Discord</Link>, as that is our main form of communication between club members and the first
                            place we post to for club news and events.
                            <br/>
                            You can also follow us on our socials on <Link
                            href={"https://www.instagram.com/oteau_/"}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Instagram"
                            color={"error"}
                        >
                            Instagram
                        </Link> and <Link
                            href={"https://twitter.com/@OTeaU3"}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Twitter"
                            color={"error"}
                        >
                            Twitter.
                        </Link>
                            <br/><br/>
                            For any additional questions, feel free to email us at <Link
                            href={"mailto:ontarioteau@gmail.com"}
                            aria-label="Mail"
                            color={"error"}
                        >ontarioteau@gmail.com</Link>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        id={"discord"}
                        xs={6}
                    >
                        <div className={classes.toolbar}/>
                        <Paper
                            style={{
                                padding: "0.5em 2em",
                                borderRadius: "10em",
                                background: "rgba(0,0,0,0.25)",
                            }}
                            elevation={0}
                        >
                            <Typography variant={"h4"} align={"center"}>
                                <Link
                                    href={"https://discord.gg/ThKymzr"}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Discord"
                                >Come chat with us on Discord!</Link>
                            </Typography>
                        </Paper>
                        <div style={{width: "100vw"}}/>
                    </Grid>
                    <Grid
                        item
                        direction={"row"}
                        container
                        alignItems={"center"}
                        justifyContent={"center"}
                        style={{paddingBottom: "10vh"}}
                    >
                        <WidgetBot
                            server="622881573980733456"
                            channel="622881573980733460"
                            width="55%"
                            height="600"
                        />
                        <iframe src="https://discord.com/widget?id=622881573980733456&theme=dark" width="15%"
                                height="600"
                                allowTransparency="true" frameBorder="0" title="OTeaU Discord"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
                    </Grid>
                    <Grid
                        item
                        id={"sponsors"}
                        xs={6}
                        className={classes.padding}
                    >
                        <div className={classes.toolbar}/>
                        <Paper
                            style={{
                                padding: "0.5em 2em",
                                borderRadius: "10em",
                                background: "rgba(0,0,0,0.25)",
                                marginBottom: "1em"
                            }}
                            elevation={0}
                        >
                            <Typography variant={"h4"} align={"center"}>
                                <Link href={"#sponsors"}>
                                    Thanks To Our Sponsors!
                                </Link>
                            </Typography>
                        </Paper>
                        <Typography variant={"h6"} align={"center"}>
                            Thanks to the following sponsors for helping with events, funding the club, and more:
                            <br/>
                            :'(
                        </Typography>
                    </Grid>
                </Grid>

                <AppBar
                    position={"relative"}
                    style={{
                        background: "rgb(25,25,25)",
                        top: "auto",
                        bottom: "0",
                        zIndex: "0"
                    }}
                >
                    <Toolbar>
                        <Grid>
                            <Grid item>
                                <Typography color={"primary"}>Copyright @ 2021 OTeaU</Typography>
                            </Grid>
                            <Grid container item direction={"row"} justifyContent={"space-around"}>

                                <Grid item>
                                    <a href={"https://twitter.com/@OTeaU3"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Twitter"
                                    >
                                        <SvgIcon color="primary" component={Twitter}/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={"https://discord.gg/ThKymzr"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Discord"
                                    >
                                        <SvgIcon color="primary" component={Discord}/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={"https://www.instagram.com/oteau_/"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Instagram"
                                    >
                                        <SvgIcon color="primary" component={Instagram}/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={"mailto:ontarioteau@gmail.com"}
                                       aria-label="Mail"
                                    >
                                        <SvgIcon color="primary" component={Email}/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href={""}
                                       aria-label="Github"
                                    >
                                        <SvgIcon color="primary" component={Github}/>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <ScrollTop {...props}>
                    <Fab color="primary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTop>
            </main>
        </MuiThemeProvider>
    )
}

export default IndexPage
