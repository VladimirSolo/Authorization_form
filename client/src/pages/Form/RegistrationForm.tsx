import React, { useImperativeHandle } from 'react';
import { useForm, Controller } from 'react-hook-form'
import { Data, RegistrationFormProps, RegistrationFormRef } from './types';
import { TextField, Box, Stack} from '@mui/material';
import styles from './RegistrationForm.module.css'
import maskPhoneNumber from '../../lib/maskPhoneNumber';

const RegistrationForm: React.ForwardRefRenderFunction<RegistrationFormRef, RegistrationFormProps> = (props, ref) => {
    const { onSubmit } = props;

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<Data>({
        defaultValues: {
            email   : '',
            number: ''
        }
    });

    useImperativeHandle(ref, () => ({
        handleSubmitForm: () => {
            handleSubmit(onSubmit)();
        }
    }));

    return (
      <Box 
          className={styles.box}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            '& .MuiTextField-root': { m:2, width: '50ch' },
          }}
      >
         <Stack 
              spacing={2}  
              justifyContent="center"
              alignItems="center"
          >
              <Controller
                  name="email"
                  control={control}
                  rules={{
                      required: true,
                      pattern : {
                        value: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
                          message: 'Неккоректный формат адреса почты'
                      }
                  }}
                  render={({ field }) => 
                      <TextField 
                          {...field} 
                          type="email"
                          id="outlined-basic" 
                          label="Введите email" 
                          variant="outlined" 
                      />
                    }
                />
                    {errors.email && (
                        <p className={styles.err}>{errors.email.message}</p>
                    )}
              <Controller
                  name="number"
                  control={control}
                  rules={{
                      required: true,
                      minLength: {
                        value: 6,
                        message: 'Введите 6 цифр через каждые 2 поставить дефис'
                      }
                  }}
                  render={({ field }) => 
                      <TextField 
                          {...field} 
                          id="outlined-basic" 
                          label="Введите number" 
                          variant="outlined" 
                          type="text"
                          inputProps={{
                            maxLength: 8
                        }}
                          onChange={(e) => {
                            field.onChange(e.target.value)
                        }}
                          value={maskPhoneNumber(field.value)}
                      />
                    }
                />
                    {errors.number && (
                        <p className={styles.error}>{errors.number.message}</p>
                    )}
          </Stack>
        </Box>
    );
};

export const RegistrationFormForwarded = React.forwardRef<RegistrationFormRef, RegistrationFormProps>(RegistrationForm);
