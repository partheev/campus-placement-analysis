import api from './configs/axiosConfig'

export const ResumeParser = async (file) => {
  const res = await api.post('/resume-parser', file)

  return res.data
}

export const PredictStudent = async (data) => {
  const res = await api.post('/predict-student-placement', data)
  return res.data
}
