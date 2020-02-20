import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secongPipe'
})
export class SecongPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
