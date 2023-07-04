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

    translateMonth(month_: number): string {
        if (JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'] == "es") {
            switch (month_){
                case 1:
                    return "Ene";
                case 2:
                    return "Feb";
                case 3:
                    return "Mar";
                case 4:
                    return "Abr";
                case 5:
                    return "May";
                case 6:
                    return "Jun";
                case 7:
                    return "Jul";
                case 8:
                    return "Ago";
                case 9:
                    return "Sep";
                case 10:
                    return "Oct";
                case 11:
                    return "Nov";
                case 12:
                    return "Dic";
              }
        }else{
            console.log("ingles")
            switch (month_){
                case 1:
                    return "Jan";
                case 2:
                    return "Feb";
                case 3:
                    return "Mar";
                case 4:
                    return "Apr";
                case 5:
                    return "May";
                case 6:
                    return "Jun";
                case 7:
                    return "Jul";
                case 8:
                    return "Aug";
                case 9:
                    return "Sep";
                case 10:
                    return "Oct";
                case 11:
                    return "Nov";
                case 12:
                    return "Dec";
              }
            
        }
    }
    
}
