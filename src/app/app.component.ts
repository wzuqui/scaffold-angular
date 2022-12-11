import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import styled from 'styled-components';

import { ReactWrapperComponent } from './lib/react-wrapper.component';
import { App } from './pages/App';
import { main } from './pages/main';

const styles = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundHeader};
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ReactWrapperComponent<typeof App> {
  constructor(elementRef: ElementRef<HTMLElement>, private router: Router) {
    super(elementRef);
  }

  reactProps() {
    return {};
  }

  reactComponent() {
    return main;
  }

  ngAfterViewInit() {
    // createStyleSheet
    console.log(styles);
    const element = this.elementRef.nativeElement;
  }
}
