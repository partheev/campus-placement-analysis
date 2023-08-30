import {
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { SKILLS_ICON_PATHS } from '../../../data/SkillsAndIcons';
import { Fragment } from 'react';

export const SkillsRequiredForAvgSalary = ({ skills }) => {
    return (
        <div
            style={{
                backgroundColor: 'white',
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    padding: '0.7rem 0',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-primary)',
                    color: 'var(--blue-black)',
                    fontWeight: '600',
                }}
            >
                Skills Required to get Avg. Salary
            </Typography>
            <List
                sx={{
                    // width: '100%',
                    // maxWidth: 360,
                    backgroundColor: 'white',
                    padding: '0.2rem 0.5rem',
                }}
            >
                {skills.map((skill, idx) => {
                    return (
                        <Fragment key={idx}>
                            <ListItem>
                                <ListItemAvatar>
                                    <img
                                        style={{
                                            objectFit: 'contain',
                                            width: '2.5rem',
                                        }}
                                        src={SKILLS_ICON_PATHS[skill]}
                                        alt='technology'
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={skill} />
                            </ListItem>
                            {idx !== skills.length - 1 && <Divider />}
                        </Fragment>
                    );
                })}
            </List>
        </div>
    );
};

SkillsRequiredForAvgSalary.propTypes = {
    skills: PropTypes.array,
};
