export type FormPropsType = {
  title: string;
  funcSubmit: (email: string, password: string, name?: string) => Promise<void>;
};

export interface IFormInput {
  name?: string;
  email: string;
  password: string;
}
