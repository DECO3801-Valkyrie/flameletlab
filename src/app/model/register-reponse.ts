import {IOccupationType} from './occupation-type';

export interface IRegisterResponse {
  fullName: string;
  email: string;
  occupationType: IOccupationType;
}
