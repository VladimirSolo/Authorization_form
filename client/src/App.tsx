import React, { useRef, useState } from 'react';
import './App.css';
import { RegistrationFormForwarded } from './pages/Form/RegistrationForm';
import { Data, RegistrationFormRef } from './pages/Form/types';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Box, Typography } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from './hook';
import { receive } from './store/receiveThunk';

function App() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<RegistrationFormRef | null>(null);
  const dispath = useTypedDispatch()
  const { data, error } = useTypedSelector((state) => state.receive)

  const handleSubmitForm = async (data: Data) => {
    setLoading(true);
    try {
      await dispath(receive(data))
    } catch (error) {
      setLoading(false)
    }
    setLoading(false)
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
              {error && <Typography className='data'variant="h4">Данные не найдены</Typography>}
              {data &&
                 <React.Fragment>
                    <Typography className='data' variant="h4">{data.email}</Typography>
                    <Typography className='data' variant="h4">{data.number}</Typography>
                 </React.Fragment> 
                }
            </Box>
    </Box>
  );
}

export default App;
