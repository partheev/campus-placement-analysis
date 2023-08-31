import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Container, Typography } from '@mui/material';
import { useRef } from 'react';
import PropTypes from 'prop-types';

export const UploadBox = ({ onUploadClick, children, acceptFiles }) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        // 👇️ open file inpcut box on click of another element
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        onUploadClick(fileObj);
        inputRef.current.value = '';
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
                style={{ display: 'none' }}
                ref={inputRef}
                type='file'
                accept={acceptFiles}
                onChange={handleFileChange}
            />
            <Container
                onClick={handleClick}
                maxWidth='sm'
                sx={{
                    border: '2px dashed black',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    margin: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    ':hover': {
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    },
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'black',
                    }}
                >
                    <Typography
                        fontSize={'0.8rem'}
                        fontWeight={400}
                        fontFamily={'var(--font-primary)'}
                    >
                        {children}
                    </Typography>
                    {/* <Typography
                        fontSize={'0.8rem'}
                        fontWeight={400}
                        fontFamily={'var(--font-primary)'}
                    >
                        placement predictions and insights
                    </Typography> */}
                    <UploadFileIcon sx={{ marginTop: '1rem' }} />
                </div>
            </Container>
        </div>
    );
};

UploadBox.propTypes = {
    children: PropTypes.any,
    onUploadClick: PropTypes.func.isRequired,
    acceptFiles: PropTypes.string,
};
