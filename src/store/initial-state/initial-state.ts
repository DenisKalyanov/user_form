export type TInitialState ={
  isAuthorization: boolean;
  currentUser: string | null;
}

const initialState: TInitialState = {
  isAuthorization: false,
  currentUser: null,
};

export default initialState;
