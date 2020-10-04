import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string): void {
    // tslint:disable-next-line: radix
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(): void {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxuz';
    const symbols = '!@#$%^&*()';

    let validCharacters = '';

    if (this.includeLetters) {
      validCharacters += letters;
    }

    if (this.includeNumbers) {
      validCharacters += numbers;
    }

    if (this.includeSymbols) {
      validCharacters += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }

    this.password = generatedPassword;

  }

}
