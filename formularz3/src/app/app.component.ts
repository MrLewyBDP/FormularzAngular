import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularz3';
  
  imieinazwisko: string = "";
  email: string = "";
  produkt: string = "";
  ilosc: number = 0;
  wiadomosc: string = "";
  regulamin:any;
  kodPocztowy:any;

  onSubmit(){
    alert(this.imieinazwisko + " dziekujemy za zamowienie " + this.produkt + " w ilosci " + this.ilosc + ". Kod pocztowy zamówienia to: " + this.kodPocztowy + ". Szczegoly zamowienia zostana wyslane na email" + this.email)
  }

  mouseEnter(event:MouseEvent)
  {
    let target:any = event.currentTarget;
    target.style.backgroundColor = "gray"
  }

  mouseLeave(event:MouseEvent)
  {
    let target:any = event.currentTarget;
    target.style.backgroundColor = "";
    if(target.innerText=="Resetuj")
    {
      target.style.backgroundColor = "red";
    }
  }
}

