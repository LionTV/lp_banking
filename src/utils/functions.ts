import { debugMsg } from "./debug";
import { fetchNui } from "./fetchNui";

export function genNumberCode(length: number) {
    let digits = "0123456789";
    let code = "";
    for (let i=0;  i < length; i++) {
        code += digits[Math.floor(Math.random() * 10)];
    }

    return code;
}

export function createNewAcc(name: string, changeCard: string) {
    let iban = genNumberCode(16);
    debugMsg("ok", "Name: " + name + " and Category: " + changeCard)
    fetchNui('createAcc', {
        owner: name,
        cardcategory: changeCard,
        createdAt: new Date(),
        iban: iban,
    });
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
