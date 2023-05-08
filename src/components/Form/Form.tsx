import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { FormPropsType, IFormInput } from '../../models/form.model';

const Form = (props: FormPropsType) => {
  const { title, funcSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const isNewUser = title === 'Sign Up';
  const onSubmit = (data: IFormInput) => funcSubmit(data.email, data.password, data.name);

  return (
    <Box
      component="form"
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {isNewUser && (
        <TextField
          id="outlined-name-input"
          label="Name"
          type="text"
          {...register('name', {
            required: 'required',
            minLength: { value: 3, message: 'minimum 3 symbols' },
            maxLength: { value: 15, message: 'maximum 15 symbols' },
            pattern: { value: /^[^\n ]*$/, message: 'not valid' },
          })}
          error={errors?.name !== undefined}
          helperText={errors?.name?.message}
          autoComplete="current-name"
        />
      )}
      <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        {...register('email', {
          required: 'required',
          minLength: { value: 8, message: 'minimum 8 symbols' },
          maxLength: { value: 30, message: 'maximum 30 symbols' },
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
