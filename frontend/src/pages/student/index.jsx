import { useContext, useState } from 'react'
import { Header } from '../../components/header'
import { UploadBox } from '../campus/UploadBox'
import { motion } from 'framer-motion'
import { ResumeParser } from '../../apis/StudentAPI'
import {
  Button,
  Container,
  FormControl,
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
import styles from './student.module.css'
import { RxCross2 } from 'react-icons/rx'
import { AppContext } from '../../contexts/AppContext'
import { GiMedallist } from 'react-icons/gi'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export const Student = () => {
  const { isMobile } = useContext(AppContext)
  const [isResumeUpload, setisResumeUpload] = useState(false)
  const [formDetails, setformDetails] = useState({
    tier: '',
    cgpa: '',
    inter_gpa: '',
    ssc_gpa: '',
    internships: '',
    no_of_projects: 0,
    is_participate_hackathon: null,
    is_participated_extracurricular: null,
    no_of_programming_languages: '',
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

  const [studentName, setstudentName] = useState('')

  const onUploadClick = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    console.log('filee  ', file)
    try {
      const res = await ResumeParser(formData)
      console.log(res)
      setstudentName(res.studentName)
      setformDetails(res.details)
      if (res.details.CSE === 1) setbranch('CSE')
      else if (res.details.ECE === 1) setbranch('ECE')
      else if (res.details.MECH === 1) setbranch('MECH')

      const skills = []
      if (res.details.dsa === 1) skills.push('dsa')
      if (res.details.mobile_dev === 1) skills.push('mobile_dev')
      if (res.details.web_dev === 1) skills.push('web_dev')
      if (res.details.Machine_Learning === 1) skills.push('Machine_Learning')
      if (res.details.cloud === 1) skills.push('cloud')

      setselectedSkills(skills)
    } catch (err) {
      console.log(err)
    }
  }

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

  const handleChange = async (event) => {
    const {
      target: { value },
    } = event
    console.log(event.target.value)
    setselectedSkills(typeof value === 'string' ? value.split(',') : value)
    console.log(selectedSkills)
    setformDetails((prevState) => {
      const newState = {
        ...prevState,
        dsa: 0,
        mobile_dev: 0,
        web_dev: 0,
        Machine_Learning: 0,
        cloud: 0,
      }
      const assignSelectedSkills = {}
      event.target.value.forEach((skill) => (assignSelectedSkills[skill] = 1))

      return { ...newState, ...assignSelectedSkills }
    })
  }

  const handleChangeBranch = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setbranch(e.target.value)
    setformDetails((prev) => {
      return { ...prev, [e.target.value]: 1 }
    })
  }

  const handlePredict = (e) => {
    e.preventDefault()
    const data = {
      tier: [formDetails.tier],
      cgpa: [formDetails.cgpa],
      inter_gpa: [formDetails.inter_gpa],
      ssc_gpa: [formDetails.ssc_gpa],
      internships: [formDetails.internships],
      no_of_projects: [formDetails.no_of_projects],
      is_participate_hackathon: [formDetails.is_participate_hackathon],
      is_participated_extracurricular: [
        formDetails.is_participated_extracurricular,
      ],
      no_of_programming_languages: [formDetails.no_of_programming_languages],
      dsa: [formDetails.dsa],
      mobile_dev: [formDetails.mobile_dev],
      web_dev: [formDetails.web_dev],
      Machine_Learning: [formDetails.Machine_Learning],
      cloud: [formDetails.cloud],
      CSE: [formDetails.CSE],
      ECE: [formDetails.ECE],
      IT: [formDetails.IT],
      MECH: [formDetails.MECH],
    }
    console.log(data)
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
          height: 'fit-content',
          backgroundImage:
            'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )',
          paddingBottom: '20px',
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  College Tier
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formDetails.tier}
                  label="College Tier"
                  variant="outlined"
                  onChange={(e) =>
                    setformDetails({ ...formDetails, tier: e.target.value })
                  }
                  sx={{ width: '100%' }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
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
                value={formDetails.cgpa}
              />
            </div>
            <div className={styles.grid_item}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">BRANCH</InputLabel>
                <Select
                  // sx={{ width: '100%' }}
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
              </FormControl>
            </div>

            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({
                    ...formDetails,
                    inter_gpa: e.target.value,
                  })
                }
                id="outlined-number"
                label="Intermediate GPA"
                type="number"
                sx={{ width: '100%' }}
                value={formDetails.inter_gpa}
              />
            </div>
            <FormControl>
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
                      // selected
                      // style={getStyles(name, selectedSkills, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </FormControl>
            <div className={styles.grid_item}>
              <TextField
                onChange={(e) =>
                  setformDetails({ ...formDetails, ssc_gpa: e.target.value })
                }
                id="outlined-number"
                label="SSC GPA"
                type="number"
                sx={{ width: '100%' }}
                value={formDetails.ssc_gpa}
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
                value={formDetails.internships}
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
                value={formDetails.no_of_programming_languages}
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '12px',
            }}
          >
            <Button
              onClick={handlePredict}
              variant="contained"
              sx={{ padding: '10px 20px' }}
            >
              PREDICT
            </Button>
          </div>
          <div className={styles.predicted_screen}>
            <h1 style={{ fontSize: '40px', textAlign: 'center' }}>
              Here&apos;s your Prediction
            </h1>
            {studentName ? (
              <h1 style={{ fontSize: '30px' }}>HELLO! {studentName}</h1>
            ) : (
              ''
            )}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                className={styles.percentage_text}
              >
                <GiMedallist /> Chances Of Getting Placed -
                <span className={styles.percentageBody}>
                  <span className={styles.percentage}>94%</span>
                </span>
              </div>
              <h1>
                Predicted Salary:{' '}
                <span style={{ color: '#9d44c0' }}>{4}LPA</span>
              </h1>
              <div>
                <p style={{ fontSize: '20px', marginTop: '1rem' }}>
                  Recommended Skills To Increase Your Chances Of Getting Placed
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '10px',
                    rowGap: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    className={styles.recommendedSkills}
                    style={{ padding: '10px 20px', fontSize: '20px' }}
                  >
                    WEB Development
                  </div>
                  <div
                    className={styles.recommendedSkills}
                    style={{ padding: '10px 20px', fontSize: '20px' }}
                  >
                    WEB Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
