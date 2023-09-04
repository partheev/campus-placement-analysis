import PropTypes from 'prop-types';
import styles from '../home.module.css';
import { motion } from 'framer-motion';
import { Card, Container, Grid, Stack, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
const TOP_FACTORS = [
    {
        title: 'Number of Programming Languages',
        description:
            'Proficiency in multiple programming languages showcases adaptability and the capacity to handle diverse projects and tech stacks, making you a versatile asset to employers.',
        icon: TerminalIcon,
    },
    {
        title: 'CGPA',
        description:
            'A strong CGPA reflects consistent dedication, a robust understanding of subjects, and the ability to excel under academic challenges, positioning you as a disciplined and capable candidate in the job market.',
        icon: SchoolIcon,
    },
    {
        title: 'Web Development',
        description:
            "With the increasing reliance on digital platforms, expertise in web development is pivotal. It empowers you to create and maintain responsive, engaging, and functional websites, aligning with the current digital landscape's demands.",
        icon: LanguageIcon,
    },
    {
        title: 'Internships',
        description:
            ' Internship experiences translate theoretical knowledge into practical skills. They highlight your ability to collaborate, problem-solve, and contribute effectively within a professional setting, enhancing your appeal to potential employers.',
        icon: WorkOutlineIcon,
    },
];
const AVG_PACKAGE_VITAL_SKILLS = [
    {
        title: 'Machine Learning',
        description:
            'Proficiency in machine learning opens avenues in data-driven decision-making. It equips you to fill roles related to predictive analytics, data modeling, and AI, catering to the growing demand for data-savvy professionals.',
        icon: QueryStatsIcon,
    },
    {
        title: 'Web Development',
        description:
            'In a world reliant on digital interaction, web developers play a pivotal role. Their skill set is pivotal in creating user-centric, visually appealing online platforms, serving as a key factor in attracting and retaining customers.',
        icon: LanguageIcon,
    },
];
const Item = ({ children, Icon, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0.5, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            className={styles.item}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: '8px',
                margin: '0 0 5px 0',
                padding: '0 2px',
            }}
        >
            <Card
                sx={{
                    height: '100%',
                    padding: '1rem',
                    width: '100%',
                }}
            >
                <Grid container columnSpacing={'1rem'}>
                    <Grid item xs={'auto'}>
                        <Icon sx={{ fontSize: '2.5rem', color: '#35F2DF' }} />
                    </Grid>

                    <Grid item xs>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-primary)',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {children}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-secondary)',
                                    fontWeight: '400',
                                }}
                            >
                                {description}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Card>
        </motion.div>
    );
};
export const TopFactors = ({ isMobile }) => {
    const imgVariants = {
        offscreen: {
            y: 400,

            opacity: 0,
        },
        onscreen: {
            y: -135,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.5,
            },
        },
    };
    return (
        <div
            style={{
                // backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                backgroundColor: '#f6f6f6',
            }}
        >
            <motion.div
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
                style={{ width: '1px', zIndex: 4 }}
            >
                {!isMobile ? (
                    <div style={{ position: 'absolute', width: '10rem' }}>
                        <motion.img
                            variants={imgVariants}
                            style={{ width: '100%' }}
                            src='/static/images/Rectangle_img.webp'
                        />
                    </div>
                ) : (
                    ''
                )}
            </motion.div>
            <Container maxWidth='lg' sx={{ paddingBottom: '5rem' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        position: 'relative',
                        flexWrap: 'wrap',
                    }}
                >
                    <div style={{ padding: '2px' }}>
                        <h1 style={{ textAlign: 'center' }}>
                            Top Factors Affecting Placements
                        </h1>

                        <Grid
                            alignItems={'stretch'}
                            container
                            rowSpacing={'0.5rem'}
                            columnSpacing={'0.5rem'}
                        >
                            {TOP_FACTORS.map((value, idx) => {
                                return (
                                    <Grid key={idx} item md={6} sm={12}>
                                        <Item
                                            Icon={value.icon}
                                            description={value.description}
                                        >
                                            {value.title}
                                        </Item>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </div>
                    <div
                        style={{
                            width: '18rem',
                            zIndex: 0,
                            position: 'absolute',
                            top: 190,
                            right: 100,
                            opacity: 0.2,
                            transform: 'rotate(-10deg)',
                        }}
                    >
                        <img
                            style={{ width: '100%' }}
                            src='/static/images/back-view-of-monitor-and-keyboard.png'
                        />
                    </div>
                    <div style={{ padding: '8px' }}>
                        <h1 style={{ textAlign: 'center' }}>
                            Averaging Package Vital Skills
                        </h1>
                        <Grid
                            container
                            rowSpacing={'0.5rem'}
                            columnSpacing={'0.5rem'}
                        >
                            {AVG_PACKAGE_VITAL_SKILLS.map((value, idx) => {
                                return (
                                    <Grid item key={idx} lg={12}>
                                        <Item
                                            Icon={value.icon}
                                            description={value.description}
                                        >
                                            {value.title}
                                        </Item>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    );
};

Item.propTypes = {
    children: PropTypes.any,
    Icon: PropTypes.any,
    description: PropTypes.string,
};

TopFactors.propTypes = {
    isMobile: PropTypes.bool,
};
