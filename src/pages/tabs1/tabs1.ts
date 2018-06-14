import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerProvider } from '../../providers/server/server';


@IonicPage()
@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {
  public isSearchbarOpened = false;
  private url: string = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=77d913621dcc49a0bb31ca721463aa2a';
  public g1: Array<{}>;
  
  constructor(public http:Http,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public serverProvider: ServerProvider,
              ) {
                this.http.get(this.url)
     .map(res => res.json())
     .subscribe(data => {
     this.g1 = data.articles
    });
                
 
  }

}
