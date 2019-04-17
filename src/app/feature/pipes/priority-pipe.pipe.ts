import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityPipe'
})
export class PriorityPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 1:
        return 'Minor';
      case 2:
        return 'Major';
      case 3:
        return 'Critical';
    }
  }

}
