import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {CurrencyRequestHistory} from "../../model/currency-request-history";
import {ErrorDialogComponent} from "../../components/error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-currency-requests-history-page',
  templateUrl: './currency-requests-history-page.component.html',
  styleUrls: ['./currency-requests-history-page.component.css']
})
export class CurrencyRequestsHistoryPageComponent implements OnInit {
  displayedColumns: string[] = ['currency', 'name', 'date', 'value'];
  currencyRequestsHistory: CurrencyRequestHistory[] = [];

  constructor(private currencyService: CurrencyService,
              private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.currencyService.getCurrencyRequestsHistory()
      .subscribe({
        next: (result: CurrencyRequestHistory[]) =>  this.currencyRequestsHistory = result,
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

