import { Component, ElementRef } from '@angular/core';
import React from 'react';
import { createRoot } from 'react-dom/client';

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

@Component({
  template: '',
})
export abstract class ReactWrapperComponent<T extends Function> {
  constructor(protected elementRef: ElementRef<HTMLElement>) {
    this.render();
  }

  abstract reactComponent(): React.FunctionComponent<ArgumentTypes<T>[0]>;
  abstract reactProps(): ArgumentTypes<T>[0];

  render() {
    createRoot(this.elementRef.nativeElement).render(
      React.createElement(this.reactComponent(), this.reactProps() as any)
    );
  }
}
