import React, { FC, useRef, useState } from 'react';
import styles from './Registration.module.css';
import { RegistrationFormForwarded } from '../RegistrationForm/RegistrationForm';
import { Data, RegistrationFormRef } from '../RegistrationForm/types';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Box, Typography } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from '../../../hook';
import { receive } from '../../../store/receiveThunk';
import { receiveActions } from '../../../store';

export const Registration: FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<RegistrationFormRef | null>(null);
  const dispatch = useTypedDispatch()
  const { data, error } = useTypedSelector((state) => state.receive)

  const handleSubmitForm = async (data: Data) => {
    const { email, number} = data;
    setLoading(true);
    try {
      await dispatch(receive({ email, number: number.replace(/-/g, '')} ))
    } catch (error) {
      setLoading(false)
    }
    setLoading(false)
}

  const handleFormClick = () => {
    dispatch(receiveActions.clearData()); 
    formRef.current?.handleSubmitForm();
};
  return (
    <Box className={styles.wrapper} sx={{ 'button': { m: 2, width: '50ch', height: '7ch' } }}>
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
              {error && <Typography className={styles.data} variant="h4">Данные не найдены</Typography>}
              {data &&
                 <React.Fragment>
                    <Typography className={styles.data} variant="h4">{data.email}</Typography>
                    <Typography className={styles.data} variant="h4">{data.number}</Typography>
                 </React.Fragment> 
                }
            </Box>
    </Box>
  );
}
