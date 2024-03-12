import { Ibox } from "./Ibox"; 
export class Box implements Ibox {
constructor(
public id: string,
public nom: string,
public pieces: string,
public prix: string,
public image: string,
public aliments:[],
public saveurs:string[]) {
}
}