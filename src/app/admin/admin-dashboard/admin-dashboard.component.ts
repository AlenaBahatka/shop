import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../core/services';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  feedbackArray: Array<String>;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackArray = this.feedbackService.getFeedback();
  }

}
