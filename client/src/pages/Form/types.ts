export interface Data {
  email: string;
  number: string;
}

export interface RegistrationFormProps {
  onSubmit: (data: Data) => void;
}

export interface RegistrationFormRef {
  handleSubmitForm: () => void;
}