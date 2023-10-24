import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticle } from '../IArticle';

@Component({
  selector: 'app-modal-article',
  templateUrl: './modal-article.component.html',
  styleUrls: ['./modal-article.component.css']
})
export class ModalArticleComponent {
  
  @Input() articleEnfant: IArticle | undefined;
  @Output() messageEnvoye = new EventEmitter<string>();

  envoyerMessage(){
    this.messageEnvoye.emit('Bonjour les parents');
  }
 
}
