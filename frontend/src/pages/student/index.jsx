import { useState } from 'react'
import { Header } from '../../components/header'
import { UploadBox } from '../campus/UploadBox'
import { motion } from 'framer-motion'
import { ResumeParser } from '../../apis/StudentAPI'

export const Student = () => {
  const [isResumeUpload, setisResumeUpload] = useState(false)

  const onUploadClick = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    console.log('filee  ', file)
    try {
      const res = await ResumeParser(formData)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div style={{ backgroundColor: 'blueviolet' }}>
      <Header />
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {!isResumeUpload ? (
            <div
              style={{
                padding: '1rem',
                border: '2px solid black',
                borderRadius: '40px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => setisResumeUpload(!isResumeUpload)}
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
            >
              <UploadBox acceptFiles=".pdf" onUploadClick={onUploadClick}>
                Upload Resume. Accepted Formats: .pdf
              </UploadBox>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
