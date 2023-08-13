import api from './configs/axiosConfig';

export const PredictCampusPlacements = async (excelFile) => {
    console.log('api input ', excelFile);
    const response = (await api.post('/predict-campus-placements', excelFile))
        .data;

    return response;
};
