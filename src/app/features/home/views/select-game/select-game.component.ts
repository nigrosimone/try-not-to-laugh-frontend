import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { DialogAlertService } from 'src/app/shared/components/dialog-alert/dialog-alert.service';
import { createParticle } from 'src/app/shared/utils/common';

const DIALOG_DESC_ARCADE = 'In questa DEMO vedrai un video divertente, cerca di non ridere!';
const DIALOG_DESC_FACEDETECTION = 'In questa DEMO puoi TESTARE il riconoscimento delle espressioni facciali';
const DIALOG_DESC_EXPRESSIONTRAINING = 'In questa DEMO ti sarà chiesto di fare espressioni di un certo tipo in modo random, non sbagliare!';
const DIALOG_DESC_EMOJIDETECTION = 'In questa demo la tua espressione viene utilizzata per selezionare una emoji pertinente';
@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss']
})
export class SelectGameComponent {

  constructor(
    private routingService: RoutingService,
    private dialogAlertService: DialogAlertService) { }

  onFaceExpressionDetectionTest(e: MouseEvent): void {
    createParticle(e.x, e.y);
    this.dialogAlertService.openDialog({ title: 'Info', content: DIALOG_DESC_FACEDETECTION }).afterClosed().subscribe(result => {
      if (result) {
        this.routingService.homeCameraDetection();
      }
    });
  }

  onArcade(e: MouseEvent): void {
    createParticle(e.x, e.y);
    this.dialogAlertService.openDialog({ title: 'Info', content: DIALOG_DESC_ARCADE }).afterClosed().subscribe(result => {
      if (result) {
        this.routingService.homeArcade();
      }
    });
  }

  onExpressionTraining(e: MouseEvent): void {
    createParticle(e.x, e.y);
    this.dialogAlertService.openDialog({ title: 'Info', content: DIALOG_DESC_EXPRESSIONTRAINING }).afterClosed().subscribe(result => {
      if (result) {
        this.routingService.homeExpressionTraining();
      }
    });
  }

  onEmojiDetection(e: MouseEvent): void {
    createParticle(e.x, e.y);
    this.dialogAlertService.openDialog({ title: 'Info', content: DIALOG_DESC_EMOJIDETECTION }).afterClosed().subscribe(result => {
      if (result) {
        this.routingService.homeEmojiDetection();
      }
    });
  }
}
