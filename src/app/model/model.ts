export interface ComponentResults {
  results: Component[];
}

export interface Component {
  components: Components;
  geometry: Geometry;
}

export interface Components {
  city: string;
}

export interface Geometry {
  lat: number;
  lng: number;
}
