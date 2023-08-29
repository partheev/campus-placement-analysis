import { BoxCard } from '../../../../components/BoxCard';
import PropTypes from 'prop-types';
export const TotalStudents = ({ totalStudents }) => {
    return (
        <BoxCard
            borderColor={'#2FF3E0'}
            title={'Total Students'}
            value={String(totalStudents)}
        />
    );
};
export const StudentsPlaced = ({ studentsPlaced }) => {
    return (
        <BoxCard
            borderColor={'#FA26A0'}
            title={'Students Placed'}
            value={String(studentsPlaced)}
        />
    );
};
export const StudentsNotPlaced = ({ studentsNotPlaced }) => {
    return (
        <BoxCard
            borderColor={'#F8D210'}
            title={'Students Not Placed'}
            value={String(studentsNotPlaced)}
        />
    );
};
export const StudentsPlacedPercent = ({ studentsPlacedPercent }) => {
    return (
        <BoxCard
            borderColor={'#F51720'}
            title={'Placed Percentage'}
            value={String(studentsPlacedPercent) + '%'}
        />
    );
};

TotalStudents.propTypes = {
    totalStudents: PropTypes.number,
};
StudentsPlaced.propTypes = {
    studentsPlaced: PropTypes.number,
};
StudentsNotPlaced.propTypes = {
    studentsNotPlaced: PropTypes.number,
};
StudentsPlacedPercent.propTypes = {
    studentsPlacedPercent: PropTypes.number,
};
