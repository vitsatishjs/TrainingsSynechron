import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize',
    pure: true
})

export class CapitalizePipe implements PipeTransform {
    transform(value: string, ...args: any[]): any {
        if (!value) return value;

        return value.replace(/\w\S*/g, function (word: string) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        })
    }
}