export class DateReservation {
  month : number;
  day : number;
  weekDay : number;
  constructor(month : number, day : number, weekDay : number) {
    this.month = month;
    this.day = day;
    this.weekDay = weekDay;
  }

  getDay() : number {
    return this.day;
  }

  getMonth() : string {
    switch(this.month) {
      case 0 : return "Enero";
      case 1 : return "Febrero";
      case 2 : return "Marzo";
      case 3 : return "Abril";
      case 4 : return "Mayo";
      case 5 : return "Junio"
      case 6 : return "Julio";
      case 7 : return "Agosto";
      case 8 : return "Octubre";
      case 9 : return "Septiembre";
      case 10 : return "Noviembre";
      case 11 : return "Diciembre";
    }
  }

  getWeekDay() : string {
    switch(this.weekDay) {
      case 0 : return "Domingo";
      case 1 : return "Lunes";
      case 2 : return "Martes";
      case 3 : return "Miercoles";
      case 4 : return "Jueves";
      case 5 : return "Viernes"
      case 6 : return "Sábado";
    }
  }
}
