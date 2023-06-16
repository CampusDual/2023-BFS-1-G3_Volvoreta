import { User } from "../models/user";

export class FnTranslator {

    Fntranslator() {

    }

    translateRolename(user: User): string {
        // console.log(localStorage)
        if (JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'] == "es") {
            let role: string;
            if (user.rolename == 'security') {
                role = 'seguridad';
            } else if (user.rolename == 'maintenance') {
                role = 'mantenimiento';
            } else if (user.rolename == 'user'){
                role = 'usuario';
            } else {
                role = 'no autorizado';
            }
            return "Bienvenid@, " + user.name + " " + user.surname1 + ";  acceso: " + role;
        } else {
            if(user.rolename == '' || user.rolename == null){
                return "Welcome, " + user.name+ " " + user.surname1 + "; access type: not authorized";
            } else {
                return "Welcome, " + user.name+ " " + user.surname1 + "; access type: " + user.rolename;
            }
            
        }
    }

}
