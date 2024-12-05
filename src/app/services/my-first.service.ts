import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void{
    this.insert({
      name: 'Greg Atemi',
      email: 'greg.atemi@gmail.com',
      message: 'Good Ebening'
    });
    this.insert({
      name: 'Pavel Atemi',
      email: 'pavel.atemi@gmail.com',
      message: 'Good Ebening'
    });
    this.insert({
      name: 'Kobbie Mainoo',
      email: 'greg.atemi@gmail.com',
      message: 'Good Ebening'
    });
  }

  insert(message: {name: string, email: string, message:string}): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }


  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
