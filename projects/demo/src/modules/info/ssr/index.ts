import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLinkDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}
