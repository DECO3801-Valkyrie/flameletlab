import {IOccupationType} from './occupation-type';

export interface IAccount {
  fullName: string;
  email: string;
  occupationType?: IOccupationType;
}
