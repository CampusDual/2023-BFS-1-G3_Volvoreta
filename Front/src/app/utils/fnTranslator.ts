import { User } from "../models/user";

export class FnTranslator {

    Fntranslator() {

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
    translateOU(ou: string): string {
        if (JSON.parse(localStorage.getItem("com.ontimize.web.volvoreta"))['lang'] == "es") {
            if(ou === "over"){
                return "Por encima";
            } else {
                return "Por debajo";
            }
        } else {
            if(ou === "over"){
                return "Over";
            } else {
                return "Under";
            }
        }
    }
}
