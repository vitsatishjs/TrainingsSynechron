// // 1. Element Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-two',
//     template: `
//         <h1 class="text-success">Hello from Component Two!</h1>
//         <h1 style="border-style: dashed; border-width: 2px; border-color: green;">From Component Two!</h1>

//     `
// })
// export class CTwoComponent {

// }

// 2. Template Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'c-two',
//     template: `
//         <style>
//             .card {
//                 border-style: dashed; 
//                 border-width: 2px; 
//                 border-color: green;
//             }
//         </style>
//         <h1 class="text-success">Hello from Component Two!</h1>
//         <h1 class="card">From Component Two!</h1>
//     `,
//     encapsulation: ViewEncapsulation.ShadowDom
// })
// export class CTwoComponent {

// }

// 3. Component Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'c-two',
//     styles: [`
//         .card {
//             border-style: dashed; 
//             border-width: 2px; 
//             border-color: green;
//         }
//     `],
//     template: `
//         <h1 class="text-success">Hello from Component Two!</h1>
//         <h1 class="card">From Component Two!</h1>
//     `
// })
// export class CTwoComponent {

// }

// 4 External CSS
import { Component } from "@angular/core";

@Component({
    selector: 'c-two',
    // styles: [require('./c-two.component.css').toString()],
    styleUrls: ['./c-two.component.css'.toString()],
    template: `
        <h1 class="text-success">Hello from Component Two!</h1>
        <h1 class="card2">From Component Two!</h1>
    `
})
export class CTwoComponent {

}