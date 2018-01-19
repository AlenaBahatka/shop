import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  comment: string;

  @ViewChild('commentP')
  commentP: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('Thanks for your comment = ' + this.commentP.nativeElement.textContent);
  }

  onMouse(event: any) {
    event.target.style.background = this.getRandomColor();
  }
  getRandomColor () {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    return '#' + ('000000' + hex.toString(16)).substr(-6);
  }

}
