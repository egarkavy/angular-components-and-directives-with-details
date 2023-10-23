import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef, inject } from '@angular/core';

interface CustomForContext<TItem> {
  $implicit: TItem,
  roflIndex: number;
  appCustomForRofl: TItem[]
}

@Directive({
  selector: '[appCustomFor]',
  standalone: true
})
export class CustomForDirective<TItem> implements OnChanges {
  @Input({required: true}) appCustomForRofl: TItem[] | undefined; 
  @Input({required: true}) appCustomForIsGachi: ((item: TItem) => boolean) | undefined;
  @Input({}) appCustomForTEST: ((item: TItem) => boolean) | undefined;

  private templateRef: TemplateRef<CustomForContext<TItem>> = inject(TemplateRef);
  private viewContainer: ViewContainerRef = inject(ViewContainerRef);

  public ngOnChanges(changes: SimpleChanges): void {
    const {appCustomForRofl} = changes;

    if (appCustomForRofl) {
      this.viewContainer.clear();

      this.appCustomForRofl?.forEach((item, i) => {
        const isGachi = this.appCustomForIsGachi?.(item);

        if (!isGachi) {
          return;
        }

        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item, roflIndex: i, appCustomForRofl: this.appCustomForRofl })
      })
    }
  }
}
