import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, createAnimation, IonContent } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { hideAnimation, sendMessageAnimation } from 'src/app/animation';
import { User } from 'src/app/interfaces';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messageTitle = true;
  isTyped = '';
  chat = this.database.chat;
  userData: any;
  master: User = {
    id: 1,
    isAnonymous: false,
    name: '',
    surname: '',
    email: '',
    password: '',
    old: 0
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  // @ViewChild('messages') messageContainer: IonContent;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('messageContainer') messageContainer: any;
  constructor(
    private router: Router,
    private storage: Storage,
    private database: DatabaseService,
    private animationCtrl: AnimationController) {
      this.init();
  }
  init(){
    this.storage.create();
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.messageContainer.scrollToBottom) {
          this.messageContainer.scrollToBottom(400);
      }
  }, 500);
  }


  async click() {
    if (this.messageTitle) {
      const animationA = createAnimation()
        .addElement(document.querySelector('.messIntro'))
        .duration(100)
        .fromTo('opacity', '1', '0');
      await animationA.play();

      setTimeout(() => {
        this.messageTitle = false;
      }, 100);
    }
  }

  hideAnimation(className){
    hideAnimation(className);
  }

  messenger(){
    this.database.chat.filter(e => e.fromId);
  }

  sendMessage(className){
    this.database.chat.push({
      fromId: this.userData.id,
      toId: 'not yet',
      message: this.isTyped
    });
    console.log('sended');
    this.isTyped = '';
    sendMessageAnimation(className);
    this.scrollToBottom();
  }


  async ngOnInit() {
    const email = await this.storage.get('email');
    const user = this.database.users.find(e => e.email === email);
    if (!user) {
      console.log('no users redirect to signin');
      this.router.navigateByUrl('/signin');
    } else {
      console.log(user);
      this.userData = user;
    }
    this.scrollToBottom();
  }

}
