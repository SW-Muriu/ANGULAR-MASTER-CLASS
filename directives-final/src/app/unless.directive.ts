import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  /******************
   * The template reference marks the what and the vcRef marks the where.
   * Using self-built structural directive
   */
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
