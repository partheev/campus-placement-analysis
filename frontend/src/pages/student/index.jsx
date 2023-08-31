import { Fragment, useContext, useRef, useState } from 'react';
import { Header } from '../../components/header';
import { UploadBox } from '../campus/UploadBox';
import { motion } from 'framer-motion';
import { PredictStudent, ResumeParser } from '../../apis/StudentAPI';
import {
    Alert,
    Button,
    CircularProgress,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    Snackbar,
    TextField,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import styles from './student.module.css';
import { RxCross2 } from 'react-icons/rx';
import { AppContext } from '../../contexts/AppContext';
import { GiMedallist } from 'react-icons/gi';
import { TfiHandPointRight } from 'react-icons/tfi';
import CloseIcon from '@mui/icons-material/Close';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const INITIAL_STATE = {
    tier: '',
    cgpa: '',
    inter_gpa: '',
    ssc_gpa: '',
    internships: '',
    no_of_projects: 0,
    is_participate_hackathon: '',
    is_participated_extracurricular: '',
    no_of_programming_languages: '',
    dsa: 0,
    mobile_dev: 0,
    web_dev: 0,
    'Machine Learning': 0,
    cloud: 0,
    CSE: 0,
    ECE: 0,
    IT: 0,
    MECH: 0,
};

export const Student = () => {
    const { isMobile } = useContext(AppContext);
    const [isResumeUpload, setisResumeUpload] = useState(false);
    const [formDetails, setformDetails] = useState(INITIAL_STATE);

    const [studentName, setstudentName] = useState('');

    const [selectedSkills, setselectedSkills] = useState([]);
    const [branch, setbranch] = useState('');
    const [predictedData, setPredictedData] = useState(null);
    const [loading, setloading] = useState(false);

    const predictedComponentRef = useRef(null);
    const executeScroll = () => predictedComponentRef.current.scrollIntoView();

    const [openSnackBar, setopenSnackBar] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const handleOpenSnackBar = (msg) => {
        setopenSnackBar(true);
        seterrorMessage(msg);
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setopenSnackBar(false);
    };

    const action = (
        <Fragment>
            <Button
                color='secondary'
                size='small'
                onClick={handleCloseSnackBar}
            >
                UNDO
            </Button>
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleCloseSnackBar}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </Fragment>
    );

    const onUploadClick = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            setloading(true);
            const res = await ResumeParser(formData);
            setstudentName(res.studentName);
            setformDetails(res.details);
            setloading(false);
            if (res.details.CSE === 1) setbranch('CSE');
            else if (res.details.ECE === 1) setbranch('ECE');
            else if (res.details.MECH === 1) setbranch('MECH');

            const skills = [];
            if (res.details.dsa === 1) skills.push('dsa');
            if (res.details.mobile_dev === 1) skills.push('mobile_dev');
            if (res.details.web_dev === 1) skills.push('web_dev');
            if (res.details['Machine Learning'] === 1)
                skills.push('Machine Learning');
            if (res.details.cloud === 1) skills.push('cloud');

            setselectedSkills(skills);
        } catch (err) {
            console.log(err);
            setloading(false);
            handleOpenSnackBar(err.message);
        }
    };

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const skills = [
        { name: 'DSA', key: 'dsa' },
        { name: 'Mobile app development', key: 'mobile_dev' },
        { name: 'Web development', key: 'web_dev' },
        { name: 'Machine Learning', key: 'Machine Learning' },
        { name: 'Cloud', key: 'cloud' },
    ];

    const handleSkillsChange = async (event) => {
        const {
            target: { value },
        } = event;
        setselectedSkills(typeof value === 'string' ? value.split(',') : value);
        setformDetails((prevState) => {
            const newState = {
                ...prevState,
                dsa: 0,
                mobile_dev: 0,
                web_dev: 0,
                'Machine Learning': 0,
                cloud: 0,
            };
            const assignSelectedSkills = {};
            value.forEach((skill) => (assignSelectedSkills[skill] = 1));

            return { ...newState, ...assignSelectedSkills };
        });
    };

    const handleChangeBranch = (e) => {
        e.preventDefault();
        setbranch((prevBranch) => {
            setformDetails((prev) => {
                return { ...prev, [prevBranch]: 0, [e.target.value]: 1 };
            });
            return e.target.value;
        });
    };

    const handlePredict = async (e) => {
        e.preventDefault();
        const data = {
            tier: [Number(formDetails.tier)],
            cgpa: [Number(formDetails.cgpa)],
            inter_gpa: [Number(formDetails.inter_gpa)],
            ssc_gpa: [Number(formDetails.ssc_gpa)],
            internships: [Number(formDetails.internships)],
            no_of_projects: [Number(formDetails.no_of_projects)],
            is_participate_hackathon: [
                Number(formDetails.is_participate_hackathon),
            ],
            is_participated_extracurricular: [
                Number(formDetails.is_participated_extracurricular),
            ],
            no_of_programming_languages: [
                Number(formDetails.no_of_programming_languages),
            ],
            dsa: [Number(formDetails.dsa)],
            mobile_dev: [Number(formDetails.mobile_dev)],
            web_dev: [Number(formDetails.web_dev)],
            'Machine Learning': [Number(formDetails['Machine Learning'])],
            cloud: [Number(formDetails.cloud)],
            CSE: [Number(formDetails.CSE)],
            ECE: [Number(formDetails.ECE)],
            IT: [Number(formDetails.IT)],
            MECH: [Number(formDetails.MECH)],
        };

        try {
            setloading(true);
            const res = await PredictStudent(data);
            setPredictedData(res);
            setloading(false);
            setformDetails(INITIAL_STATE);
            setbranch('');
            setselectedSkills([]);
            executeScroll();
        } catch (err) {
            console.log(err);
            setloading(false);
            handleOpenSnackBar(err.message);
        }
    };
    return (
        <div
            style={{
                // backgroundImage: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
                fontFamily: 'var(--font-primary)',
                backgroundImage:
                    'linear-gradient(90deg, #21D4FD 0%, #cb8eeb 100%)',
            }}
        >
            <Header />

            <div
                style={{
                    minHeight: '90vh',
                    height: 'fit-content',
                    backgroundImage:
                        'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )',
                    paddingBottom: '20px',
                }}
            >
                {loading ? (
                    <CircularProgress
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%,-50%)',
                            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
                            background: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgba(0, 0, 0, 0.)',
                        }}
                        color='secondary'
                    />
                ) : (
                    ''
                )}
                <Snackbar
                    open={openSnackBar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackBar}
                    action={action}
                >
                    <Alert onClose={handleCloseSnackBar} severity='error'>
                        {errorMessage}
                    </Alert>
                </Snackbar>
                {!isMobile && (
                    <div
                        style={{
                            width: '20rem',
                            opacity: 0.5,
                            position: 'absolute',
                        }}
                    >
                        <img
                            style={{ width: '100%' }}
                            src='/static/images/person-studying-online.png'
                        />
                    </div>
                )}
                <Container maxWidth='lg'>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {!isResumeUpload ? (
                            <div
                                style={{
                                    padding: '1.2rem',
                                    border: '2px solid black',
                                    borderRadius: '40px',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    margin: '10px',
                                    backgroundColor: 'rgba(0,0,0,0.1)',
                                }}
                                onClick={() =>
                                    setisResumeUpload(!isResumeUpload)
                                }
                            >
                                Upload Your Resume
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0.5, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    duration: 1,
                                    delay: 0,
                                }}
                                style={{ display: 'flex' }}
                            >
                                <UploadBox
                                    acceptFiles='.pdf'
                                    onUploadClick={onUploadClick}
                                >
                                    Upload Resume. Accepted Formats: .pdf
                                </UploadBox>
                                <div
                                    style={{
                                        marginTop: '15px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setisResumeUpload(false)}
                                >
                                    <RxCross2 />
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <h1 style={{ textAlign: 'center', fontSize: '45px' }}>
                        OR
                    </h1>

                    <div className={styles.grid} style={{}}>
                        <div className={styles.grid_item}>
                            <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-helper-label'>
                                    College Tier
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    value={formDetails.tier}
                                    label='College Tier'
                                    variant='outlined'
                                    onChange={(e) =>
                                        setformDetails((prev) => ({
                                            ...prev,
                                            tier: e.target.value,
                                        }))
                                    }
                                    sx={{ width: '100%' }}
                                >
                                    <MenuItem value={'1'}>1</MenuItem>
                                    <MenuItem value={'2'}>2</MenuItem>
                                    <MenuItem value={'3'}>3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={styles.grid_item}>
                            <TextField
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        cgpa: e.target.value,
                                    }))
                                }
                                id='outlined-number'
                                label='Degree CGPA'
                                type='number'
                                sx={{ width: '100%' }}
                                value={formDetails.cgpa}
                            />
                        </div>
                        <div className={styles.grid_item}>
                            <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label'>
                                    BRANCH
                                </InputLabel>
                                <Select
                                    // sx={{ width: '100%' }}
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    value={branch}
                                    label='BRANCH'
                                    onChange={handleChangeBranch}
                                >
                                    <MenuItem value={'CSE'}>CSE</MenuItem>
                                    <MenuItem value={'ECE'}>ECE</MenuItem>
                                    <MenuItem value={'MECH'}>MECH</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className={styles.grid_item}>
                            <TextField
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        inter_gpa: e.target.value,
                                    }))
                                }
                                id='outlined-number'
                                label='Intermediate GPA'
                                type='number'
                                sx={{ width: '100%' }}
                                value={formDetails.inter_gpa}
                            />
                        </div>
                        <FormControl>
                            <div className={styles.grid_item}>
                                <InputLabel id='demo-multiple-name-label'>
                                    Skills
                                </InputLabel>
                                <Select
                                    labelId='demo-multiple-name-label'
                                    id='demo-multiple-name'
                                    multiple
                                    value={selectedSkills}
                                    onChange={handleSkillsChange}
                                    input={<OutlinedInput label='Name' />}
                                    MenuProps={MenuProps}
                                    sx={{ width: '100%' }}
                                >
                                    {skills.map((skill, idx) => (
                                        <MenuItem
                                            key={idx}
                                            value={skill.key}
                                            // selected
                                            // style={getStyles(name, selectedSkills, theme)}
                                        >
                                            {skill.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </FormControl>
                        <div className={styles.grid_item}>
                            <TextField
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        ssc_gpa: e.target.value,
                                    }))
                                }
                                id='outlined-number'
                                label='SSC GPA'
                                type='number'
                                sx={{ width: '100%' }}
                                value={formDetails.ssc_gpa}
                            />
                        </div>
                        <div className={styles.grid_item}>
                            <TextField
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        internships: e.target.value,
                                    }))
                                }
                                id='outlined-number'
                                label='Number Of Internships'
                                type='number'
                                sx={{ width: '100%' }}
                                value={formDetails.internships}
                            />
                        </div>
                        <div className={styles.grid_item}>
                            <FormLabel id='demo-controlled-radio-buttons-group'>
                                Participated In Extra Curricular Activities
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby='demo-row-radio-buttons-group-label'
                                name='row-radio-buttons-group'
                                value={
                                    formDetails.is_participated_extracurricular
                                }
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        is_participated_extracurricular:
                                            parseInt(e.target.value),
                                    }))
                                }
                            >
                                <FormControlLabel
                                    value={1}
                                    control={<Radio />}
                                    label='YES'
                                />
                                <FormControlLabel
                                    value={0}
                                    control={<Radio />}
                                    label='NO'
                                />
                            </RadioGroup>
                        </div>
                        <div className={styles.grid_item}>
                            <TextField
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        no_of_projects: e.target.value,
                                    }))
                                }
                                id='outlined-number'
                                label='Number Of Projects'
                                type='number'
                                sx={{ width: '100%' }}
                            />
                        </div>

                        <div className={styles.grid_item}>
                            <FormLabel id='demo-controlled-radio-buttons-group'>
                                Participated In Hackathons
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby='demo-controlled-radio-buttons-group'
                                name='controlled-radio-buttons-group'
                                value={formDetails.is_participate_hackathon}
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        is_participate_hackathon: parseInt(
                                            e.target.value
                                        ),
                                    }))
                                }
                            >
                                <FormControlLabel
                                    value={1}
                                    control={<Radio />}
                                    label='YES'
                                />
                                <FormControlLabel
                                    value={0}
                                    control={<Radio />}
                                    label='NO'
                                />
                            </RadioGroup>
                        </div>

                        <div className={styles.grid_item}>
                            <TextField
                                onChange={(e) =>
                                    setformDetails((prev) => ({
                                        ...prev,
                                        no_of_programming_languages:
                                            e.target.value,
                                    }))
                                }
                                id='outlined-number'
                                label='Number Of Programming Languages'
                                type='number'
                                sx={{ width: '100%' }}
                                value={formDetails.no_of_programming_languages}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '20px',
                        }}
                    >
                        <Button
                            onClick={handlePredict}
                            variant='contained'
                            sx={{ fontSize: '18px', fontWeight: 500 }}
                        >
                            PREDICT
                        </Button>
                    </div>
                    <div ref={predictedComponentRef}></div>
                    {predictedData && (
                        <div className={styles.predicted_screen}>
                            <h1
                                style={{
                                    fontSize: '40px',
                                    textAlign: 'center',
                                }}
                            >
                                Here&apos;s your Prediction
                            </h1>
                            {studentName ? (
                                <h1 style={{ fontSize: '30px' }}>
                                    HELLO! {studentName}
                                </h1>
                            ) : (
                                ''
                            )}
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    className={styles.percentage_text}
                                >
                                    <GiMedallist
                                        style={{ fontSize: 'inherit' }}
                                    />{' '}
                                    Chances Of Getting Placed -
                                    <span className={styles.percentageBody}>
                                        <span className={styles.percentage}>
                                            {
                                                predictedData.placement_probability
                                            }
                                            %
                                        </span>
                                    </span>
                                </div>
                                <h1>
                                    <TfiHandPointRight /> Predicted Salary:{' '}
                                    <span style={{ color: '#9d44c0' }}>
                                        {predictedData.predicted_salary}LPA
                                    </span>
                                </h1>
                                <div>
                                    <p
                                        style={{
                                            fontSize: '20px',
                                            marginTop: '1rem',
                                        }}
                                    >
                                        <TfiHandPointRight /> Recommended Skills
                                        To Increase Your Chances Of Getting
                                        Placed:
                                    </p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            columnGap: '10px',
                                            rowGap: '10px',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <div
                                            className={styles.recommendedSkills}
                                            style={{
                                                padding: '10px 20px',
                                                fontSize: '20px',
                                            }}
                                        >
                                            Deep Learning
                                        </div>
                                        <div
                                            className={styles.recommendedSkills}
                                            style={{
                                                padding: '10px 20px',
                                                fontSize: '20px',
                                            }}
                                        >
                                            Blockchain
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </div>
    );
};
