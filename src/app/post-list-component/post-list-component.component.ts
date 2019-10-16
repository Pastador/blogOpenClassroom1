import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() created_at: Date;
	
	compteurEtat: string = 'neutre';
	 
  constructor() { }

 evaluerEtatCompteur(){
		if (this.loveIts>0){
			this.compteurEtat='positif';
		}else if (this.loveIts<0){
			this.compteurEtat='negatif';
		}else{
			this.compteurEtat='neutre';
		}	
	  console.log(this.compteurEtat);
	}

  ajouterLike(){
	  console.log('On ajoute un like');
	  this.loveIts++;
	  console.log(this.loveIts);
	  this.evaluerEtatCompteur();
  }
  
  retirerLike(){
	  console.log('On retire un like');
	   this.loveIts--;
	  console.log(this.loveIts);
	  this.evaluerEtatCompteur();
  }
  
  ngOnInit() {
  }
  

  

}
