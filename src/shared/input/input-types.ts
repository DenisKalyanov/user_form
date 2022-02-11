export type TInput = {
  placeholder: string;
  name: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
