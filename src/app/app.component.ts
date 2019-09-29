import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'market name';


  audioFlag: boolean = false;

  constructor(private router: Router) {
  }

  moveContent(){
    let content: any = document.getElementsByClassName("content")[0];
    if( content.classList.contains("moved") ){
      content.classList.remove("moved");
    } else {
      content.classList.add("moved");
    }
  }

  play(){
    if(!this.audioFlag){
      let id = setInterval(() => {

        let audio = new Audio();
        audio.src = '/assets/audio/music.mp3';
        audio.load();
        audio.play();
        audio.playbackRate = Math.random() * Math.floor(2);
        audio.volume = Math.random();
      }, 8000);
    }
  }


}
