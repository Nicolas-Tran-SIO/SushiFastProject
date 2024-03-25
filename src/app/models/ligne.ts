import { Box } from "./Box";

export class Ligne {
    quantite: number
    box:Box
    constructor(quantite: number,box:Box) {
        this.quantite = quantite;
        this.box=box
    }
}