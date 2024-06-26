import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiSwitchComponent} from '@taiga-ui/kit';
import {TuiIslandDirective} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiIslandDirective,
        ReactiveFormsModule,
        TuiSwitchComponent,
        TuiLinkDirective,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected testForm = new FormGroup({
        testValue: new FormControl(true),
    });
}
