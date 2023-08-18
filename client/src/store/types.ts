type Status = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface IData {
  email: string,
  number: string,
}

export interface ResponseData {
  data: IData,
  isLoading: Status,
  error: null | string,
}
