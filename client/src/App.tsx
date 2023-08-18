import React, { useRef, useState } from 'react';
import './App.css';
import { RegistrationFormForwarded } from './pages/Form/RegistrationForm';
import { Data, RegistrationFormRef } from './pages/Form/types';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Box, Typography } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<RegistrationFormRef | null>(null);

  const handleSubmitForm = async (data: Data) => {
    console.log(data)
    setLoading(true);
    if(data) {
      setTimeout(() => {
        setLoading(false)
      },5000)
    }
}

  const handleFormClick = () => {
    formRef.current?.handleSubmitForm();
};
  return (
    <Box className='wrapper' sx={{ 'button': { m: 2, width: '50ch', height: '7ch' } }}>
      <Typography variant="h4">Поиск данных в базе данных</Typography>
            <RegistrationFormForwarded ref={formRef} onSubmit={handleSubmitForm}/>
            <LoadingButton
                  onClick={handleFormClick}
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
            >
                  <span>Отправить</span>
            </LoadingButton>
            <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: '#0097a7',
                  marginTop: 5,
                  borderRadius: '10%'
                }}
            >
                 <Typography className='data' variant="h4">data</Typography>
            </Box>
    </Box>
  );
}

export default App;
