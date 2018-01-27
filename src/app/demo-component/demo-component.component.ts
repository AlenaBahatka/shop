import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConstantsService } from '../services/constants.service';
import { LocalStorageService } from '../services/local-storage.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { GeneratorService, Generator } from '../services/generator.factory';

// Demo-component to check that some new services work
const constInst = new ConstantsService();

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css'],
  providers: [
    { provide: ConstantsService, useValue: constInst },
    { provide: Generator, useFactory:  GeneratorService(10) }
  ]
})
export class DemoComponentComponent implements OnInit {

  constructor(@Optional() private constService: ConstantsService,
  @Optional() private storageService: LocalStorageService,
  @Optional() private configService: ConfigOptionsService,
  @Inject(Generator) private generator: any[]
  ) {}

  ngOnInit() {
    const constant = this.constService ? this.constService.getConstants() : 'No service for constants';
    console.log(constant);
    if (this.storageService && this.configService) {
      this.configService.saveLoginOptions('login', 1, 'll@email.com');
      this.storageService.setItem('1', '123');
      // should be not found
      console.log(this.storageService.getItem('0'));
      // should find
      console.log(this.storageService.getItem('1'));
    }
    // should return array of n random chars
    console.log(this.generator);
  }
}
