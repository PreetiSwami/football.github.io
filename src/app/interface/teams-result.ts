export interface teamDataType {
    id:number,
    name:string,
    logo:string,
    winner:boolean
}

export interface fixtureDataType {
    fixture:Object,
    league:Object,
    teams:{
        home:teamDataType,
        away:teamDataType
    };
    goals:{
        home:number,
        away:number
    }
    score:Object
}


export interface fixureType {
    get:string,
    parameters:{
        season:string,
        team:string,
        last:string
    };
    errors:string[],
    results:number,
    paging:{
        current:number,
        total:string
    };
    response:fixtureDataType[]

}
