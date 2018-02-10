export class User {
  email: string;
  password: string;
  name: string;
  second_name: string;
  arrival: string;
  departure : string;
  room: number;
  constructor(email : string, password : string, name: string, second_name : string, arrival : string,
 departure : string, room : number) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.second_name = second_name;
    this.arrival = arrival;
    this.departure = departure;
    this.room = room;
  }
}
