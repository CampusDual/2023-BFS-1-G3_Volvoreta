import { User } from "../models/user";

export class FnTranslator {

    Fntranslator() {

    }

    translateRolename(user: User): string {
        // console.log(localStorage)
        if (JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'] == "es") {
            let role: string;
            if (user.ROLENAME == 'security') {
                role = 'seguridad';
            } else if (user.ROLENAME == 'maintenance') {
                role = 'mantenimiento';
            } else if (user.ROLENAME == 'user'){
                role = 'usuario';
            } else {
                role = 'no autorizado';
            }
            return "Bienvenid@, " + user.NAME + " " + user.SURNAME1 + ";  acceso: " + role;
        } else {
            if(user.ROLENAME == '' || user.ROLENAME == null){
                return "Welcome, " + user.NAME+ " " + user.SURNAME1 + "; access type: not authorized";
            } else {
                return "Welcome, " + user.NAME+ " " + user.SURNAME1 + "; access type: " + user.ROLENAME;
            }
            
        }
    }

}
