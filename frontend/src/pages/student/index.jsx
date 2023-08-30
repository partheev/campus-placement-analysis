import { useContext, useState } from 'react'
import { Header } from '../../components/header'
import { UploadBox } from '../campus/UploadBox'
import { motion } from 'framer-motion'
import { ResumeParser } from '../../apis/StudentAPI'
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import styles from './student.module.css'
import { RxCross2 } from 'react-icons/rx'
import { AppContext } from '../../contexts/AppContext'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export const Student = () => {
  const { isMobile } = useContext(AppContext)
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

  const [formDetails, setformDetails] = useState({
    tier: null,
    cgpa: null,
    inter_gpa: null,
    ssc_gpa: null,
    internships: 0,
    no_of_projects: 0,
    is_participate_hackathon: 0,
    is_participated_extracurricular: 0,
    no_of_programming_languages: 0,
    dsa: 0,
    mobile_dev: 0,
    web_dev: 0,
    Machine_Learning: 0,
    cloud: 0,
    CSE: 0,
    ECE: 0,
    IT: 0,
    MECH: 0,
  })

  console.log(formDetails)
  const [selectedSkills, setselectedSkills] = useState([])
  const [branch, setbranch] = useState('')

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const skills = ['dsa', 'mobile_dev', 'web_dev', 'Machine_Learning', 'cloud']

  function getStyles(name, selectedSkills, theme) {
    return {
      fontWeight:
        selectedSkills.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }
  }
  const theme = useTheme()

  const setInitialVaules = async () => {
    const promise = new Promise((resolve, reject) => {
      setformDetails({
        ...formDetails,
        dsa: 0,
        mobile_dev: 0,
        web_dev: 0,
        Machine_Learning: 0,
        cloud: 0,
      })
      resolve(formDetails)
    })
    return promise
  }
  const handleChange = async (event) => {
    const {
      target: { value },
    } = event
    console.log(event.target.value)
    setselectedSkills(typeof value === 'string' ? value.split(',') : value)
    console.log(selectedSkills)
    await setInitialVaules()

    const assignSelectedSkills = {}
    event.target.value.forEach((skill) => (assignSelectedSkills[skill] = 1))
    setformDetails({ ...formDetails, ...assignSelectedSkills })
  }
  const handleChangeBranch = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setbranch(e.target.value)
    setformDetails((prev) => {
      return { ...prev, [e.target.value]: 1 }
    })
  }

  return (
    <div
      style={{
        backgroundColor: 'blueviolet',
        fontFamily: 'var(--font-primary)',
      }}
    >
      <Header />

      <div
        style={{
          minHeight: '90vh',
          backgroundImage:
            'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )',
          // backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        }}
      >
        {!isMobile && (
          <div style={{ width: '20rem', opacity: 0.5, position: 'absolute' }}>
            <img
              style={{ width: '100%' }}
              src="/static/images/person-studying-online.png"
            />
          </div>
        )}
        <Container maxWidth="lg">
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
                style={{ display: 'flex' }}
              >
                <UploadBox acceptFiles=".pdf" onUploadClick={onUploadClick}>
                  Upload Resume. Accepted Formats: .pdf
                </UploadBox>
                <div
                  style={{ marginTop: '15px', cursor: 'pointer' }}
                  onClick={() => setisResumeUpload(false)}
                >
                  <RxCross2 />
                </div>
              </motion.div>
            )}
          </div>
          <h1 style={{ textAlign: 'center', fontSize: '45px' }}>OR</h1>
          <div className={styles.grid} style={{}}>
            <div className={styles.grid_item}>
              <InputLabel id="demo-simple-select-label">
                College Tier
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formDetails.tier}
                label="College Tier"
                onChange={(e) =>
                  setformDetails({ ...formDetails, tier: e.target.value })
                }
                sx={{ width: '100%' }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </div>
            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({ ...formDetails, cgpa: e.target.value })
                }
                id="outlined-number"
                label="Degree CGPA"
                type="number"
                sx={{ width: '100%' }}
              />
            </div>
            <div className={styles.grid_item}>
              <InputLabel id="demo-simple-select-label">BRANCH</InputLabel>
              <Select
                sx={{ width: '100%' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branch}
                label="BRANCH"
                onChange={handleChangeBranch}
              >
                <MenuItem value={'CSE'}>CSE</MenuItem>
                <MenuItem value={'ECE'}>ECE</MenuItem>
                <MenuItem value={'MECH'}>MECH</MenuItem>
              </Select>
            </div>

            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({ ...formDetails, inter_gpa: e.target.value })
                }
                id="outlined-number"
                label="Intermediate GPA"
                type="number"
                sx={{ width: '100%' }}
              />
            </div>
            <div className={styles.grid_item}>
              <InputLabel id="demo-multiple-name-label">Skills</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={selectedSkills}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                sx={{ width: '100%' }}
              >
                {skills.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, selectedSkills, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({ ...formDetails, ssc_gpa: e.target.value })
                }
                id="outlined-number"
                label="SSC GPA"
                type="number"
                sx={{ width: '100%' }}
              />
            </div>
            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({
                    ...formDetails,
                    internships: e.target.value,
                  })
                }
                id="outlined-number"
                label="Number Of Internships"
                type="number"
                sx={{ width: '100%' }}
              />
            </div>
            <div className={styles.grid_item}>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Participated In Extra Curricular Activities
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={formDetails.is_participated_extracurricular}
                onChange={(e) =>
                  setformDetails({
                    ...formDetails,
                    is_participated_extracurricular: parseInt(e.target.value),
                  })
                }
              >
                <FormControlLabel value={1} control={<Radio />} label="YES" />
                <FormControlLabel value={0} control={<Radio />} label="NO" />
              </RadioGroup>
            </div>
            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({
                    ...formDetails,
                    no_of_projects: e.target.value,
                  })
                }
                id="outlined-number"
                label="Number Of Projects"
                type="number"
                sx={{ width: '100%' }}
              />
            </div>

            <div className={styles.grid_item}>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Participated In Hackathons
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={formDetails.is_participate_hackathon}
                onChange={(e) =>
                  setformDetails({
                    ...formDetails,
                    is_participate_hackathon: parseInt(e.target.value),
                  })
                }
              >
                <FormControlLabel value={1} control={<Radio />} label="YES" />
                <FormControlLabel value={0} control={<Radio />} label="NO" />
              </RadioGroup>
            </div>

            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({
                    ...formDetails,
                    no_of_programming_languages: e.target.value,
                  })
                }
                id="outlined-number"
                label="Number Of Programming Languages"
                type="number"
                sx={{ width: '100%' }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
