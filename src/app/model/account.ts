import {IOccupationType} from './occupation-type';

export interface IAccount {
  id: number;
  fullName: string;
  email: string;
  occupationType?: IOccupationType;
}
