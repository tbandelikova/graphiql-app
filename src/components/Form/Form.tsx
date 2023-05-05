import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { FormPropsType, IFormInput } from '../../models/form.model';

const Form = (props: FormPropsType) => {
  const { title } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Box
      component="form"
      sx={{
        width: 300,
        height: 250,
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        {...register('email', {
          required: 'required',
          minLength: { value: 8, message: 'minimum 8 symbols' },
          maxLength: { value: 20, message: 'maximum 20 symbols' },
          pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'not valid' },
        })}
        error={errors?.email !== undefined}
        helperText={errors?.email?.message}
        autoComplete="current-email"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        {...register('password', {
          required: 'required',
          minLength: { value: 8, message: 'minimum 8 symbols' },
          maxLength: { value: 20, message: 'maximum 20 symbols' },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/,
            message: 'at least one letter, one digit, one special character',
          },
        })}
        error={errors?.password !== undefined}
        helperText={errors?.password?.message}
        autoComplete="current-password"
      />
      <Button type="submit" variant="contained" color="secondary">
        {title}
      </Button>
    </Box>
  );
};

export default Form;
