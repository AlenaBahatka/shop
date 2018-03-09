import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FeedbackComponent } from '..';
import { FeedbackService } from '../../core/services';
import { FormsModule } from '@angular/forms';

// stub FeedbackService
const feedbackServiceStub = {
  feedbacks: [],
  addFeedback: function(feedback){
    feedbackServiceStub.feedbacks.push(feedback);
  }
};

describe('FeedbackComponent', () => {
  let component: FeedbackComponent,
      fixture: ComponentFixture<FeedbackComponent>,
      feedbackService: FeedbackService;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [FormsModule],
        declarations: [FeedbackComponent],
        providers: [{ provide: FeedbackService, useValue: feedbackServiceStub }]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;

    feedbackService = TestBed.get(FeedbackService);
  });

  it('should have title', () => {
    fixture.detectChanges();
    const pEl = fixture.debugElement.queryAll(By.css('p'));
    const title = pEl[0].nativeElement.textContent;

    expect(pEl[1].nativeElement.textContent).toBe('');
    expect(title).toContain('Please leave us a feedback', 'title is displayed');
  });

  it('should have comment in p and in input field', fakeAsync(() => {
    component.comment = 'comment';
    fixture.detectChanges();
    tick();
    const debugElement = fixture.debugElement;

    expect(debugElement.query(By.css('input')).properties.value).toContain('comment');
    expect(debugElement.queryAll(By.css('p'))[1].nativeElement.textContent).toContain('comment');
  }));

  it('should add comment', () => {
    component.comment = 'comment';
    fixture.detectChanges();

    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);

    expect(feedbackServiceStub.feedbacks.indexOf('comment')).toBe(0);
  });
});
