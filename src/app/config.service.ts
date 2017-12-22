import { Injectable } from '@angular/core';
import CONFIGS from "../ecosystem.json";
//declare function require(url: string);

Injectable();
export class CONFIG{

    public ENVIROMENT : string = CONFIGS.currentENVIROMENT;
    public CONFIGS    : string = CONFIGS[this.ENVIROMENT];
    public API_DOMAIN : string = CONFIGS[this.ENVIROMENT].API_DOMAIN;
    public DB_CONFIG  : object = CONFIGS[this.ENVIROMENT].DB;
    public API_ROUTES : string | any = CONFIGS.API_ROUTES;

    constructor(){

    }

    public API_URL    : object =
    {
        GET_USERS     : `${this.API_DOMAIN}${this.API_ROUTES.GET_USERS}`,
        CREATE_USER   : `${this.API_DOMAIN}${this.API_ROUTES.CREATE_USER}`
     };

}