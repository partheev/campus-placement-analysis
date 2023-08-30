import api from './configs/axiosConfig';

export const PredictCampusPlacements = async (excelFile) => {
    const response = (await api.post('/predict-campus-placements', excelFile))
        .data;

    return response;
};
