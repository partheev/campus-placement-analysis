import api from './configs/axiosConfig'

export const ResumeParser = async (file) => {
  const res = await api.post('/resume-parser', file)

  return res.data
}
