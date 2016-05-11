//import 'es6-shim';
import {App, Platform} from 'ionic-angular';//, NavController, IonicApp
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';



@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    //Root page
    rootPage: any = TabsPage;

    constructor(
        private platform: Platform
        //private nav: NavController,
        //private app: IonicApp
    ){
        this.initializeApp();
     }

        initializeApp(){
            this.platform.ready().then(() => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                StatusBar.styleDefault();
            });
        }
        /*openPage(page) {
            // navigate to the new page if it is not the current page
           let navi = this.app.getComponent('nav');
           navi.setRoot(page.component);
        }*/
    
  
}
