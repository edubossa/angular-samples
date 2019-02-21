import { Directive, Input, HostBinding, OnChanges } from '@angular/core';


enum CardType {
  VISA = 'https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png',
  MASTERCARD = 'https://seeklogo.com/images/M/mastercard-logo-473B8726A9-seeklogo.com.png',
  AMERICA_EXPRESS = 'https://seeklogo.com/images/A/american-express-logo-9A4ED92133-seeklogo.com.png',
  DINERS = 'https://seeklogo.com/images/D/Diners_Club-logo-9EA513928F-seeklogo.com.png',
  ELO = 'https://seeklogo.com/images/E/elo-logo-896ED16F0F-seeklogo.com.png',
  HIPERCARD = 'https://seeklogo.com/images/H/hipercard-logo-24ACB8E6BE-seeklogo.com.png',
  DISCOVER = 'https://seeklogo.com/images/D/Discover_Card-logo-4BC5D7C02C-seeklogo.com.png',
  DEFAULT = 'https://seeklogo.com/images/C/cartao-de-todos-logo-0F4A59CCAF-seeklogo.com.png'
}

// https://blog.angulartraining.com/tutorial-how-to-create-your-own-angular-directive-3532d7f31fab
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ccLogo]'
})
export class CreditcardImageDirective implements OnChanges {

  @HostBinding('src')
  imageSource;

  @Input()
  cartNumber: string;

  ngOnChanges() {
    console.log('Alterando src da imagem!');
    this.imageSource = this.getCardTypeFromNumber();
  }

  getCardTypeFromNumber(): CardType {
    if (this.cartNumber) {
      if (this.cartNumber.startsWith('1')) {
        return CardType.VISA;
      } else if (this.cartNumber.startsWith('2')) {
        return CardType.MASTERCARD;
      } else if (this.cartNumber.startsWith('3')) {
        return CardType.AMERICA_EXPRESS;
      } else if (this.cartNumber.startsWith('4')) {
        return CardType.DINERS;
      } else if (this.cartNumber.startsWith('5')) {
        return CardType.ELO;
      } else if (this.cartNumber.startsWith('6')) {
        return CardType.HIPERCARD;
      } else if (this.cartNumber.startsWith('7')) {
        return CardType.DISCOVER;
      }
    }
    return CardType.DEFAULT;
  }

}
