import {Component} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CurrencyResponse} from "../../model/currency-response";
import {ErrorDialogComponent} from "../../components/error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.css']
})
export class CurrencyPageComponent {
  currencyRequestForm: FormGroup;
  currencyResponse: CurrencyResponse | null;

  constructor(private formBuilder: FormBuilder,
              private currencyService: CurrencyService,
              private dialog: MatDialog) {
    this.currencyRequestForm = this.formBuilder.group({
      currency: [null, Validators.required],
      name: [null, Validators.required]
    });
    this.currencyResponse = null;
  }

  public onClick(): void {
    this.currencyService.getCurrencyValue(this.currencyRequestForm.value)
      .subscribe({
          next: (result: CurrencyResponse) =>  this.currencyResponse = result,
          error: (error) => this.openErrorDialog('Error occurred while fetching data.' + error.error)
      });
  }

  private openErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
      width: '400px'
    });
  }

}
