// import Header from '../../components/header';
import { Box, Container, Typography } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { UploadBox } from './UploadBox';
import { PredictCampusPlacements } from '../../apis/CampusAPI.js';
import { Header } from '../../components/header';

const NotePoints = [
    'Prepare & fill a excel file with your college student details.',
    'Generate excel file with placement predictions and suggetions for each student.',
];
const Campus = () => {
    const onUploadClick = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await PredictCampusPlacements(formData);
        console.log(res);
    };
    return (
        <div style={{ color: 'black' }}>
            <Header />
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
                        top: '8rem',
                        left: '5rem',
                        position: 'absolute',
                        height: '60vh',
                        // width: '20vw',
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
                                href='/assets/sample_format.csv'
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
                    <UploadBox onUploadClick={onUploadClick} />
                </Container>
            </div>
        </div>
    );
};

export default Campus;
