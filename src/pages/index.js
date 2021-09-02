import * as React from "react"
import {
    AppBar,
    createTheme,
    CssBaseline, Divider, Drawer,
    Fab,
    Grid, IconButton,
    Link, List, ListItem, ListItemIcon, ListItemText,
    makeStyles,
    MuiThemeProvider,
    Paper,
    responsiveFontSizes,
    SvgIcon,
    Toolbar,
    Typography, useMediaQuery,
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
import clsx from "clsx";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Helmet} from "react-helmet";

const drawerWidth = 200;

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
            main: "rgb(117,184,255)"
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
    root: {
        flexGrow: 1
    },
    appbar: {
        alignItems: "center",
        transition: "0.5s all"
    },
    padding: {
        margin: "1% 0",
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
        height: "100vh",
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.20)',
    },
    headerContent: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(20),
        },
        padding: theme.spacing(6),
        margin: 0
    },
    toolbar: theme.mixins.toolbar,
    drawerAppbar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerAppBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        background: 'rgba(0,0,0,0.25)'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
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
    const isSmall = useMediaQuery(theme.breakpoints.down('xs'))

    const [drawer, setDrawer] = React.useState(false);

    const toggleDrawer = (drawer) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawer(drawer);
    };

    return (
        <MuiThemeProvider theme={responsiveFontSizes(theme)}>
            <main className={classes.root}>
                <Helmet>
                    <title>OTeaU</title>
                    <html lang="en"/>
                </Helmet>
                <CssBaseline/>

                {isSmall ?
                    <>
                        <AppBar
                            position="fixed"
                            className={clsx(classes.drawerAppbar, {
                                [classes.drawerAppBarShift]: drawer,
                            })}
                            color={"transparent"}
                            elevation={0}
                        >
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={toggleDrawer(true)}
                                    edge="start"
                                    className={clsx(classes.menuButton, drawer && classes.hide)}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            className={classes.drawer}
                            variant="temporary"
                            anchor="left"
                            open={drawer}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onClose={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={toggleDrawer(false)}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                                </IconButton>
                            </div>
                            <Divider/>
                            <List>
                                <ListItem button key={"Home"} onClick={() => scrollTo("#home")}>
                                    <ListItemIcon><HomeIcon/></ListItemIcon>
                                    <ListItemText primary={"Home"}/>
                                </ListItem>
                                <ListItem button key={"About Us"} onClick={() => scrollTo("#about-us")}>
                                    <ListItemIcon><PeopleIcon/></ListItemIcon>
                                    <ListItemText primary={"About Us"}/>
                                </ListItem>
                                <ListItem button key={"How To Join"} onClick={() => scrollTo("#how-to-join")}>
                                    <ListItemIcon><PersonAddIcon/></ListItemIcon>
                                    <ListItemText primary={"How To Join"}/>
                                </ListItem>
                                <ListItem button key={"Our Sponsors"} onClick={() => scrollTo("#sponsors")}>
                                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                                    <ListItemText primary={"Our Sponsors"}/>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem
                                    button
                                    key={"Discord"}
                                    component={"a"}
                                    href={"https://discord.gg/ThKymzr"}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Discord"
                                >
                                    <ListItemIcon><SvgIcon component={Discord}/></ListItemIcon>
                                    <ListItemText primary={"Discord"}/>
                                </ListItem>
                                <ListItem
                                    button key={"Instagram"} component={"a"}
                                    href={"https://www.instagram.com/oteau_/"}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Instagram"
                                >
                                    <ListItemIcon><SvgIcon component={Instagram}/></ListItemIcon>
                                    <ListItemText primary={"Instagram"}/>
                                </ListItem>
                                <ListItem
                                    button key={"Twitter"} component={"a"} href={"https://twitter.com/@OTeaU3"}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Twitter"
                                >
                                    <ListItemIcon><SvgIcon component={Twitter}/></ListItemIcon>
                                    <ListItemText primary={"Twitter"}/>
                                </ListItem>
                                <ListItem
                                    button key={"Contact Us"} component={"a"}
                                    href={"mailto:ontarioteau@gmail.com"}
                                    aria-label="Contact Us"
                                >
                                    <ListItemIcon><SvgIcon component={Email}/></ListItemIcon>
                                    <ListItemText primary={"Contact Us"}/>
                                </ListItem>
                            </List>
                        </Drawer>
                    </>
                    :
                    <ElevationScroll {...props}>
                        <AppBar
                            elevation={0}
                            className={classes.appbar}
                        >
                            <Toolbar style={{minWidth: "100vw", alignItems: "center", justifyContent: "center"}}>
                                <Grid container item direction={"row"} justifyContent={"center"} lg={6} xs={12} spacing={4}>
                                    <Grid item>
                                        <CustomLink underline="none" onClick={() => scrollTo("#home")} variant={"h6"}>
                                            Home
                                        </CustomLink>
                                    </Grid>
                                    <Grid item>
                                        <CustomLink underline="none" onClick={() => scrollTo("#about-us")}
                                                    variant={"h6"}>
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
                                        <CustomLink underline="none" onClick={() => scrollTo("#sponsors")}
                                                    variant={"h6"}>
                                            Our Sponsors
                                        </CustomLink>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </ElevationScroll>
                }

                <Paper
                    className={classes.image}
                    elevation={5}
                    id={"home"}
                    square
                >
                    <div className={classes.overlay}/>
                    <Grid
                        className={classes.headerContent}
                        container
                        item
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
                        <Grid item lg={6} xs={12}>
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
                                    <a href={"https://twitter.com/@OTeaU3"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Twitter"
                                    >
                                        <SvgIcon color="primary" component={Twitter}/>
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
                    item
                    xs={12}
                    style={{margin: 0}}
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Grid
                        item
                        id={"about-us"}
                        lg={6}
                        xs={12}
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
                                <Typography variant={"h6"} component={"p"} align={"center"}>
                                    In the Fall of 2019, Tea Club was founded by a group of five dedicated tea lovers.
                                    The goal of this club was to bring everyone together to drink tea, meet new people,
                                    provide a safe space, and have fun! Since Fall of 2019, the OTeaU has grown to be a
                                    community of over a couple hundred students.
                                    <br/>
                                    <br/>
                                    OTeaU hosts a variety of events that include gaming and movie nights, general
                                    socializing, and study spaces (that cater for both loud and quiet studying). Of
                                    course, all of them catered with tea. While in person, OTeaU allows for tea exchanges
                                    and tea testing of a wide selection.
                                    <br/>
                                    <br/>
                                    Come join us for tea tastings, giveaways, exchanges, conversation, or just relax and
                                    de-stress from uni life with a hot cup of tea!
                                </Typography>
                            </Grid>
                            {isSmall ? null :
                                <Grid item xs={5}>
                                    <Paper>
                                        <StaticImage src={"../assets/images/matcha.png"} alt={"Tea"}
                                                     imgStyle={{borderRadius: "4px"}}/>
                                    </Paper>
                                </Grid>}
                        </Grid>
                        {isSmall ?
                            <Grid item container justifyContent={"center"} style={{marginTop: theme.spacing(2)}}>
                                <Grid item xs={6}>
                                    <Paper>
                                        <StaticImage src={"../assets/images/matcha.png"} alt={"Tea"}
                                                     imgStyle={{borderRadius: "4px"}}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                            : null}
                    </Grid>
                    <Grid
                        item
                        id={"how-to-join"}
                        lg={6}
                        xs={12}
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
                        <Typography variant={"h6"} component={"p"} align={"center"}>
                            If you'd like to formally join the club, feel free to fill out <Link
                            href={"https://forms.gle/26qGP3S1X7xvc6fx9"}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Membership Application"
                            color={"error"}
                        >
                            this form</Link>.
                            <br/><br/>
                            We also highly recommend joining us on <Link
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
                            <br/> <br/>
                        </Typography>
                        <Grid container item justifyContent={"center"}>
                            <Paper component={Link} href={"https://discord.gg/ThKymzr"}
                                   title="Join us on Discord"
                                   target="_blank"
                                   rel="noreferrer noopener"
                            >
                                <StaticImage
                                    src={"https://discordapp.com/api/guilds/622881573980733456/widget.png?style=banner3"}
                                    alt={"Tea"}
                                    imgStyle={{borderRadius: "4px"}}/>
                            </Paper>

                        </Grid>
                    </Grid>
                    <Grid
                        item
                        id={"sponsors"}
                        lg={6}
                        xs={12}
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
                        <Typography variant={"h6"} component={"p"} align={"center"}>
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
                                    <a href={"https://twitter.com/@OTeaU3"}
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       aria-label="Twitter"
                                    >
                                        <SvgIcon color="primary" component={Twitter}/>
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
                                    <a href={"https://github.com/SethCohen/oteau.ca"}
                                       target="_blank"
                                       rel="noreferrer noopener"
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
                    <Fab style={{backgroundColor: "rgba(0,0,0,0.25)", color: "#FFF"}} size="small"
                         aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTop>
            </main>
        </MuiThemeProvider>
    )
}

export default IndexPage
