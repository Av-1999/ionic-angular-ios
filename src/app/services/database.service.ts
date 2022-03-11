import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  users: any = [
    {
      id:1,
      progres:10,
      name: 'anabel',
      surname: 'scare',
      email: 'a',
      password: 'a'
    },
    {
      id:2,
      progres:20,
      name: 'Alan',
      surname: 'Walker',
      email: 'q',
      password: 'q'
    },
    {
      id:3,
      progres:15,
      name: 'boris',
      surname: 'master',
      email: 'aaa56a',
      password: 'bbb'
    },
    {
      id:4,
      progres:18,
      name: 'alla',
      surname: 'Miller',
      email: 'a4da456a',
      password: 'bbb'
    },
    {
      id:5,
      progres:50,
      name: 'Sem',
      surname: 'Miller',
      email: 'a456d54aa',
      password: 'bbb'
    },
    {
      id:6,
      progres:15,
      name: 'Aram',
      surname: 'Asatryan',
      email: 'a456daa',
      password: 'bbb'
    },
    {
      id:7,
      progres:40,
      name: 'David',
      surname: 'Bel',
      email: 'ad45645aa',
      password: 'bbb'
    },
    {
      id:8,
      progres:80,
      name: 'Ilon',
      surname: 'Mask',
      email: 'ad456aa',
      password: 'bbb'
    },
    {
      id:9,
      progres:50,
      name: 'Jeff',
      surname: 'Bezos',
      email: 'ad65+aa',
      password: 'bbb'
    },
    {
      id:10,
      progres:40,
      name: 'Lana',
      surname: 'Del-Ray',
      email: 'ad45aa',
      password: 'bbb'
    },
    {
      id:11,
      progres:57,
      name: 'James',
      surname: 'Brown',
      email: 'ad4a',
      password: 'bbb'
    },
    {
      id:12,
      progres:100,
      name: 'Anna',
      surname: 'Joe',
      email: 'ad545aa',
      password: 'bbb'
    },
  ];

  chat: any = [
    {
      fromId: 1,
      toId: 2,
      message: 'hi'
    },
    {
      fromId: 2,
      toId: 1,
      message: 'hallo'
    },
    {
      fromId: 1,
      toId: 2,
      message: 'how its going?'
    },
    {
      fromId: 2,
      toId: 1,
      message: 'not yet im at work now'
    },
    {
      fromId: 2,
      toId: 1,
      message: 'i will text you tomorrow ok?'
    },
    {
      fromId: 1,
      toId: 2,
      message: 'ok have a good time'
    },
  ];

  constructor() { }


}
