/**
 * sidedrawer.ts
 *
 * Manejo del sidedrawer y crearlo
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 * @version 0.0.1
 */

/**
* Imports
*/
import { TnsSideDrawer } from 'nativescript-sidedrawer';
import * as colorModule from "tns-core-modules/color";

export class Sidedrawer {

  construir () {
  TnsSideDrawer.build({
	templates: [{
		title: 'Home',
	}, {
		title: 'Judgment Day',
	}, {
		title: 'Bank Roll',
	}, {
		title: 'Fix Stuff',
	}, {
		title: 'This Is Me',
	}],
	title: 'This App Name',
	subtitle: 'is just as awesome as this subtitle!',
  headerBackgroundColor: new colorModule.Color("#0097A7"),
  backgroundColor: new colorModule.Color("#fff"),
  textColor: new colorModule.Color("#000"),
	listener: (index) => {
		//this.i = index
	},
	context: this,
})
}

abrir() {
  TnsSideDrawer.toggle()
}
}
