import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFormat',
  standalone: true
})
export class SalaryFormatPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) return '';
    return '₹' + value.toLocaleString('en-IN');
  }
}
