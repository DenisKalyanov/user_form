export type TInput = {
  isError?: boolean;
  isErrorConfirmPassword?: boolean;
  type?: string;
  placeholder: string;
  name: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
