
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';

@Injectable()
export class ServerProvider {
  
  public data : any;
  constructor(public http: Http) {
  
  }


getRemoteData(){
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {this.http.get('../../noticias.json').map(res =>
   res.json()).subscribe(data => 
   {this.data = data;resolve(this.data);
  }
  );
  }
  );
}

}




