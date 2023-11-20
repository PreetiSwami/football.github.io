  export  interface RespDataType  {
    rank: number;
    team: {
      id: number;
      name: string;
      logo: string;
    };
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: LeagueDetails;
    home: LeagueDetails;
    away: LeagueDetails;
    update: string;
  }
  
export interface Response {
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
      standings: RespDataType[][];
    };
  }
  
  export interface ResponseType {
    get: string;
    parameters: {
      league: string;
      season: string;
    };
    errors: []; 
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: Response[];
  }

  export interface LeagueDetails  {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  }
  