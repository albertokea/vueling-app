export interface Airport {
  key: string;
  name: string;
  country: string;
  city: string;
}

export interface AirportDetail extends Airport {
  owner: string;
  build: string;
  image: string;
}
