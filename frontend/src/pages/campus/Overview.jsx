import { UploadBox } from './UploadBox';
import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Snackbar,
    Typography,
} from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { PredictCampusPlacements } from '../../apis/CampusAPI.js';
import { Header } from '../../components/header';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

const backend_endpoint = import.meta.env.VITE_BACKEND_URL;
const NotePoints = [
    'Prepare & fill a excel file with your college student details.',
    'Generate excel file with placement predictions and suggetions for each student.',
];

export const Overview = ({ setcampusStats, setdownloadURL }) => {
    const { isMobile } = useContext(AppContext);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const onUploadClick = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            setisLoading(true);
            const res = await PredictCampusPlacements(formData);

            setisLoading(false);
            setdownloadURL(backend_endpoint + res.download_url);
            setcampusStats(res.stats);
        } catch (err) {
            setisLoading(false);
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(err.response.data.message);
            } else {
                // Something happened in setting up the request that triggered an err
                setError(err.message || 'Something went wrong.');
            }
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setError(null);
    };

    return (
        <div style={{ color: 'black' }}>
            <Header />
            <Snackbar
                open={error !== null}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity='error'
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
            <div
                style={{
                    position: 'absolute',
                    minHeight: '100vh',
                    width: '100%',
                    backgroundImage: 'var(--campus-bg)',
                    top: 0,
                }}
            >
                <img
                    src='/assets/images/chart-clip-art.png'
                    style={{
                        zIndex: 0,
                        width: isMobile ? '70vw' : '30vw',
                        top: '8rem',
                        left: '5rem',
                        position: 'absolute',
                        objectFit: 'contain',
                        maxHeight: '60vh',
                        opacity: 0.25,
                    }}
                />
                <Container
                    maxWidth='lg'
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Typography
                        paddingTop={'10rem'}
                        color={'white'}
                        fontWeight={'700'}
                        fontSize={'3.5rem'}
                        textAlign={'center'}
                        fontFamily={'var(--font-secondary)'}
                    >
                        Predict & Analyze
                    </Typography>
                    <Typography
                        color={'white'}
                        fontWeight={'700'}
                        fontSize={'3.5rem'}
                        textAlign={'center'}
                        fontFamily={'var(--font-secondary)'}
                    >
                        Campus Placements
                    </Typography>
                    <Typography
                        color={'black'}
                        marginY={'1rem'}
                        fontWeight={'700'}
                        fontSize={'1rem'}
                        textAlign={'center'}
                        fontFamily={'var(--font-primary)'}
                    >
                        Generate predictions and analysis report with
                        interactive charts
                    </Typography>
                    <Container maxWidth='sm'>
                        {NotePoints.map((point, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        alignItems: 'start',
                                        display: 'flex',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    <DoneOutlineIcon
                                        sx={{
                                            marginRight: '1rem',
                                        }}
                                    />
                                    <Typography
                                        color={'white'}
                                        // fontWeight={'700'}
                                        fontSize={'1rem'}
                                        fontFamily={'var(--font-primary)'}
                                    >
                                        {point}
                                    </Typography>
                                </div>
                            );
                        })}
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                marginBottom: '0.5rem',
                            }}
                        >
                            <DoneOutlineIcon
                                sx={{
                                    marginRight: '1rem',
                                }}
                            />
                            <Typography
                                color={'white'}
                                // fontWeight={'700'}
                                fontSize={'1rem'}
                                fontFamily={'var(--font-primary)'}
                            >
                                This file helps you to understand the format
                            </Typography>
                            <a
                                href='/assets/sample_format.xlsx'
                                download
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <Box
                                    sx={{
                                        ':hover': {
                                            backgroundPosition: 'right center',
                                            color: 'rgb(1,20,253)',
                                            textDecoration: 'none',
                                            boxShadow: '0 0 10px #eee',
                                        },
                                        display: 'block',
                                        color: 'black',
                                        boxShadow: '0 0 5px #eee',
                                        transition: '0.1s',
                                        cursor: 'pointer',
                                        marginLeft: '0.5rem',
                                        backgroundImage:
                                            'linear-gradient(to right, #F09819 0%, #EDDE5D  51%, #F09819  100%)',
                                        padding: '0.5rem 0.3rem',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontFamily: 'var(--font-primary)',
                                    }}
                                >
                                    Download format
                                </Box>
                            </a>
                        </div>
                    </Container>

                    {isLoading ? (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '3rem',
                            }}
                        >
                            <CircularProgress
                                sx={{
                                    color: 'white',
                                }}
                            />
                        </div>
                    ) : (
                        <UploadBox onUploadClick={onUploadClick}>
                            Upload .excel or .csv file in the mentioned format
                        </UploadBox>
                    )}
                </Container>
            </div>
        </div>
    );
};

Overview.propTypes = {
    setcampusStats: PropTypes.func,
    setdownloadURL: PropTypes.func,
};
