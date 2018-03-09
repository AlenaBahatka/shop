import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './testing-stubs';

let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    links: RouterLinkStubDirective[],
    routerLinkDebugElements: DebugElement[];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    routerLinkDebugElements = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));
    links = routerLinkDebugElements
      .map(debugElement => debugElement.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it(`have 5 router links`, () => {
    expect(links.length).toBe(5, 'should have 5 links');
    expect(links[0].linkParams).toEqual('/home', '1st link should go to Home');
    expect(links[1].linkParams).toEqual('/cart', '2nd link should go to Cart');
    expect(links[2].linkParams).toEqual('/admin', '3d link should go to Admin');
    expect(links[3].linkParams).toEqual('/login', '4th link should go to Login');
    expect(links[4].linkParams).toEqual('/feedback', '5th link should go to Feedback');
  });

  it('links have names and path and all can navigate on click', () => {
    testTitlesAndClickable(routerLinkDebugElements[0], links[0], 'Shop', '/home');
    testTitlesAndClickable(routerLinkDebugElements[1], links[1], 'Cart', '/cart');
    testTitlesAndClickable(routerLinkDebugElements[2], links[2], 'Admin', '/admin');
    testTitlesAndClickable(routerLinkDebugElements[3], links[3], 'Login', '/login');
    testTitlesAndClickable(routerLinkDebugElements[4], links[4], 'Feedback', '/feedback');
  });
});

function testTitlesAndClickable (debugElement, link, linkText, linkPath)  {
  expect(link.navigatedTo).toBeNull('link should not have navigated yet');
  expect(debugElement.nativeElement.textContent).toEqual(linkText, `name of link is ${linkText}`);

  debugElement.triggerEventHandler('click', null);
  fixture.detectChanges();

  expect(link.navigatedTo).toBe(linkPath, `link navigate to ${linkPath} path`);
}
