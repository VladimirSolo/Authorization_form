export interface IValidation {
  name: string,
  type: string,
  payload: 'body',
  required: boolean,
  validator?: (value: any) => boolean;
}