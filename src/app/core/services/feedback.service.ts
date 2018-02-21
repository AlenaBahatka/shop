import { Injectable } from '@angular/core';
import { AppSetingsService } from './app-settings.service';

const feedbacks = [];

@Injectable()
export class FeedbackService {
  feedback: Array<String>;

  constructor(private appSettingsService: AppSetingsService) {}

  public getFeedback(): Array<String> {
    return feedbacks;
  }

  public addFeedback(feedback: String) {
    this.appSettingsService.getAppSettings('key');
    feedbacks.push(feedback);
  }
}
