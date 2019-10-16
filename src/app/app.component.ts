import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	laDate = new Date();
 
  posts = [
  {
	title: 'Le Lorem Ipsum, kesako ?',
	content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Généralement, on utilise un texte en faux latin ',
	loveIts: 0,
	created_at: new Date()
  },
  {
	title: 'Ca sert à quoi ?',
	content: 'Le relecteur n est pas dérangée par le contenu, lui permettant de demeurer concentré sur le seul aspect graphique',
	loveIts: 0,
	created_at: new Date()
	
  },
  {
	title: 'un exemple, un exemple ! ',
	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
	loveIts: 0,
	created_at: new Date()
  }
  ];
 
  title = 'projet-blog-openclassroom';
}
