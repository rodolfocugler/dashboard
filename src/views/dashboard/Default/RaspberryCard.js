import PropTypes from 'prop-types';
import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

// material-ui
import {styled, useTheme} from '@mui/material/styles';
import {Avatar, Box, Grid, Menu, MenuItem, Typography} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonCard from 'ui-component/cards/Skeleton/SkeletonCard';


// assets
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BackupIcon from '@mui/icons-material/Backup';
import ComputerIcon from '@mui/icons-material/Computer';
import MemoryIcon from '@mui/icons-material/Memory';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SettingsIcon from '@mui/icons-material/Settings';

const CardWrapper = styled(MainCard)(({theme}) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        zIndex: 1,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        zIndex: 1,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - RASPBERRY CARD ||=========================== //

const RaspberryCard = ({isLoading}) => {
    const theme = useTheme();
    const [monitorData, setMonitorData] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [option, setOption] = useState("temperature");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        setAnchorEl(null);
        setOption(option);
    };

    const getMonitorData = useCallback(async (option) => {
        try {
            const response = await axios.get(`https://rasp-pi:9096/api/metrics/resource/${option}`)
            setMonitorData(response.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getMonitorData(option);
    }, [option]);

    return (
        <>
            {isLoading ? (
                <SkeletonCard/>
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{p: 2.25}}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        Raspberry Pi
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.mediumAvatar,
                                                backgroundColor: theme.palette.secondary.dark,
                                                color: theme.palette.secondary[200],
                                                zIndex: 1
                                            }}
                                            aria-controls="menu-raspberry-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreHorizIcon fontSize="inherit"/>
                                        </Avatar>
                                        <Menu
                                            id="menu-raspberry-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={() => handleClose("temperature")}>
                                                <ThermostatIcon sx={{mr: 1.75}}/> Temperature
                                            </MenuItem>
                                            <MenuItem onClick={() => handleClose("disk")}>
                                                <ComputerIcon sx={{mr: 1.75}}/> Disk
                                            </MenuItem>
                                            <MenuItem onClick={() => handleClose("memory")}>
                                                <MemoryIcon sx={{mr: 1.75}}/> Memory
                                            </MenuItem>
                                            <MenuItem onClick={() => handleClose("backups")}>
                                                <BackupIcon sx={{mr: 1.75}}/> Backups
                                            </MenuItem>
                                            <MenuItem onClick={() => handleClose("cpu")}>
                                                <SettingsIcon sx={{mr: 1.75}}/> Cpu
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item sx={{zIndex: 1}}>
                                        <Typography sx={{
                                            fontSize: '2.125rem',
                                            fontWeight: 500,
                                            mr: 1,
                                            mt: 1.75,
                                            mb: 0.75
                                        }}>
                                            {option === "temperature" && monitorData?.value} {option === "temperature" && monitorData?.unit === "Celsius" && "°C"}
                                            {option === "disk" && monitorData?.free_in_gb?.toFixed(2)} {option === "disk" && "gb free"}
                                            {option === "memory" && (monitorData?.used_in_gb * 1000)?.toFixed(2)} {option === "memory" && "mb free"}
                                            {option === "backups" && !!monitorData && monitorData.length > 0 ? monitorData[monitorData.length - 1] : null}
                                            {option === "cpu" && monitorData?.idle?.toFixed(2)} {option === "cpu" && "idle"}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{mb: 1.25}}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    {option === "backups" ? "Last backup" : option.charAt(0).toUpperCase() + option.slice(1)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

RaspberryCard.propTypes = {
    isLoading: PropTypes.bool
};

export default RaspberryCard;
