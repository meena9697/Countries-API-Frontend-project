export type AppState = {
  countriesData: {
    SearchCountries: Country[];
    countriesData: Country[];
    error: null | string;
    loading: boolean;
  };
  countryitemData: {
    countryitemData: Country[];
    error: null | string;
    loading: boolean;
  };
  favouritesData: FavouritesDataInitialState
};

export type FavouritesDataInitialState = {
  favouritesCart: Country[];
}

export type Country = {
  country_name: string
  name: {
    common: string
  };
  region: string;
  cca2: string;
  languages: {
    [key: string]: string;
  };
  flags: {
    png: string
  };
  population: number
  currencies: {
    [key: string]: {
      name: string
      symbol: any
    }
  }
};
export type Column = {
  id: "name" | "languages" | "population" | "favourites" | "flags" | "region";
  label: string;
  minWidth?: number;
  align?: "left"| "center" | "right";
  sort?: boolean;
  format?: (value: number) => void | any;
};
