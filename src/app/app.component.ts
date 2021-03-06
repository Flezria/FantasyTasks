import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FantasyTasks';

  constructor(private db: AngularFirestore){
    db.firestore.settings({ timestampsInSnapshots: true });
  }

}
