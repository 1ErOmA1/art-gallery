export interface IPainting {
  id: number
  name: string
  authorId: number
  locationId: number
  created: string
  imageUrl: string
}

export interface IAuthor {
  id: number
  name: string
}

export interface ILocation {
  id: number
  location: string
}

export interface ArtistCardProps {
  artwork: IPainting
  authors: IAuthor[]
  locations: ILocation[]
}

// export interface IArtistCard {
//   id: number;
//   title: string;
//   year: number;
//   imageUrl: string;
//   artist: string;
//   location: string;
// }

// export interface IApiResponse {
//   items: IArtistCard[];
//   totalCount: number;
// }

// export interface PaginationParams {
//   page: number;
//   limit: number;
//   search?: string;
// }
