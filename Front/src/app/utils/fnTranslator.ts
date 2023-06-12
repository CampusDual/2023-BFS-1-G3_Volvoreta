import { User } from "../models/user";

export class FnTranslator {

    Fntranslator() {

    }

    translateRolename(user: User): string {
        //console.log(JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'])
        if (JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'] == "es") {
            let role: string;
            if (user.ROLENAME == 'security') {
                role = 'seguridad';
            } else if (user.ROLENAME == 'maintenance') {
                role = 'mantenimiento';
            } else {
                role = 'usuario';
            }
            return "Bienvenid@, " + user.NAME + " " + user.SURNAME1 + ";  acceso: " + role;
        } else {
            return "Welcome, " + user.NAME+ " " + user.SURNAME1 + "; access type: " + user.ROLENAME;
        }
    }

}
