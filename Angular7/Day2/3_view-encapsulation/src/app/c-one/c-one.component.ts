// // 1. Element Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     template: `
//         <h1 class="text-info">Hello from Component One!</h1>
//         <h1 style="border-style: solid; border-width: 2px; border-color: blue;">From Component One!</h1>
//     `
// })
// export class COneComponent {

// }

// // 2. Template Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     template: `
//         <style>
//             .card {
//                 border-style: solid; 
//                 border-width: 2px; 
//                 border-color: blue;
//             }
//         </style>
//         <h1 class="text-info">Hello from Component One!</h1>
//         <h1 class="card">From Component One!</h1>
//     `,
//     encapsulation: ViewEncapsulation.ShadowDom
// })
// export class COneComponent {

// }

// 3. Component Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-one',
//     styles: [`
//         .card {
//             border-style: solid; 
//             border-width: 2px; 
//             border-color: blue;
//         }
//     `],
//     template: `
//         <h1 class="text-info">Hello from Component One!</h1>
//         <h1 class="card">From Component One!</h1>
//     `
// })
// export class COneComponent {

// }

// 4. External CSS
import { Component } from "@angular/core";

@Component({
    selector: 'c-one',
    // styles: [require('./c-one.component.css').toString()],
    styleUrls: ['./c-one.component.css'.toString()],
    template: `
        <h1 class="text-info">Hello from Component One!</h1>
        <h1 class="card1">From Component One!</h1>
    `
})
export class COneComponent {

}