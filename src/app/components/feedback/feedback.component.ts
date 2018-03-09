import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FeedbackService } from '../../core/services';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  comment: string;

  @ViewChild('commentP')
  commentP: ElementRef;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  onClick() {
    const feed = this.commentP.nativeElement.textContent;
    console.log('Thanks for your comment = ' + feed);
    this.feedbackService.addFeedback(feed);
    alert ('Thanks. Feedback was sent');
    this.comment = '';
  }

  onMouse(event: any) {
    event.target.style.background = this.getRandomColor();
  }

  getRandomColor () {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    return '#' + ('000000' + hex.toString(16)).substr(-6);
  }
}
