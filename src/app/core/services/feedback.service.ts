import { Injectable } from '@angular/core';

const feedbacks = [];

@Injectable()
export class FeedbackService {
  feedback: Array<String>;

  public getFeedback(): Array<String> {
    return feedbacks;
  }

  public addFeedback(feedback: String) {
    feedbacks.push(feedback);
  }
}
