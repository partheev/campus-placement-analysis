// import Header from '../../components/header';
import { Container } from '@mui/material';
import { UploadBox } from './UploadBox';
import { PredictCampusPlacements } from '../../apis/campusAPI';
import { Header } from '../../components/header';
const Campus = () => {
    const onUploadClick = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await PredictCampusPlacements(formData);
        console.log(res);
    };
    return (
        <>
            <Header />

            <Container maxWidth='lg'>
                <UploadBox onUploadClick={onUploadClick} />
            </Container>
        </>
    );
};

export default Campus;
