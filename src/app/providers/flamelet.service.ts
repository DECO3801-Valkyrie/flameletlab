import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlameletService {

  private flameletImage: string;

  constructor() {
  }


  setFlameLetImage(src: string) {
    this.flameletImage = src;
  }

  getFlameLetImage(): string {
    return this.flameletImage;
  }
}
