import { Injectable } from '@nestjs/common';
import jsSHA from 'jssha';

@Injectable()
export class UtilsService {
  createHash(email: string, password: string): string {
    const salt = email.split('').reverse().join('');
    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(salt + password);
    return shaObj.getHash('HEX');
  }
}
