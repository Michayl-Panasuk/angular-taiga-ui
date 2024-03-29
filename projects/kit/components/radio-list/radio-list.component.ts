import {NgForOf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import type {ValidatorFn} from '@angular/forms';
import {FormsModule, NgControl, Validators} from '@angular/forms';
import type {TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {
    AbstractTuiNullableControl,
    EMPTY_QUERY,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FALSE_HANDLER,
    tuiAsControl,
    tuiIsNativeFocusedIn,
    TuiValidatorDirective,
} from '@taiga-ui/cdk';
import type {TuiSizeS, TuiValueContentContext} from '@taiga-ui/core';
import {TuiRadioComponent, TuiRadioDirective} from '@taiga-ui/kit/components/radio';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-radio-list',
    imports: [
        NgForOf,
        FormsModule,
        PolymorpheusModule,
        TuiRadioComponent,
        TuiRadioDirective,
        TuiValidatorDirective,
    ],
    templateUrl: './radio-list.template.html',
    styleUrls: ['./radio-list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsControl(TuiRadioListComponent)],
})
export class TuiRadioListComponent<T> extends AbstractTuiNullableControl<T> {
    @ViewChildren(NgControl)
    private readonly controls: QueryList<NgControl> = EMPTY_QUERY;

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    public items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = 'm';

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> = TUI_FALSE_HANDLER;

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    @Input()
    public itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        String($implicit);

    protected get name(): string {
        return this.computedName || '';
    }

    protected get validator(): ValidatorFn {
        return this.computedInvalid ? this.error : Validators.nullValidator;
    }

    @HostListener('focusout')
    protected onFocusOut(): void {
        this.controls.forEach(control => control.control?.markAsTouched());

        if (!this.touched) {
            this.updateFocused(false);
        }
    }

    protected itemIsActive(item: T): boolean {
        return this.value === null
            ? item === null
            : this.identityMatcher(this.value, item);
    }

    private readonly error: ValidatorFn = () => ({error: 'Invalid'});
}
