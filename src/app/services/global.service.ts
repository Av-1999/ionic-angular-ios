/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  anonymous: boolean;
  objectVideos: any = [
    {
      title: 'first video width',
      minute: '3 Min Video',
    },
    {
      title: 'second video width',
      minute: '10 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
    {
      title: 'thirth video width',
      minute: '1 Min Video',
    },
  ];
  objectWhyAreYouHere: any = [
    {
      message: 'i\'m stressed',
      chosed: false
    },
    {
      message: 'Feeling angry',
      chosed: false
    },
    {
      message: 'Blabla',
      chosed: false
    },
    {
      message: 'Feeking down',
      chosed: false
    },
    {
      message: 'Notsleeping',
      chosed: false
    },
    {
      message: 'Having a bad day',
      chosed: false
    },
    {
      message: 'Family issues',
      chosed: false
    },
    {
      message: 'Explicre other options',
      chosed: false
    },
  ];
  objectCategory: any = [
    {
      message:'Fiber'
    },
    {
      message:'Fiber'
    },
    {
      message:'Fiber'
    },
    {
      message:'Fiber'
    },
    {
      message:'Fiber'
    },
    {
      message:'Fiber'
    },
    {
      message:'Fiber'
    },
    {
      message:'Fiber'
    },
  ];
  objectPeerContent: any = [
    {
      img:'https://3dtoday.ru/img/service/default.jpg',
      title:'Title',
      votes:1,
      watched:100 + '+',
      description:'some text witch nobodys gonna read cause its dificult'
    },
    {
      img:'https://3dtoday.ru/img/service/default.jpg',
      title:'Title',
      votes:1,
      watched:100 + '+',
      description:'some text witch nobodys gonna read cause its dificult'
    },
    {
      img:'https://3dtoday.ru/img/service/default.jpg',
      title:'Title',
      votes:1,
      watched:100 + '+',
      description:'some text witch nobodys gonna read cause its dificult'
    },
    {
      img:'https://3dtoday.ru/img/service/default.jpg',
      title:'Title',
      votes:1,
      watched:100 + '+',
      description:'some text witch nobodys gonna read cause its dificult'
    },

  ];
  constructor() { }

}
