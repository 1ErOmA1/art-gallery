export interface IArtistCard {
  id: number;
  title: string;
  year: number;
  imageUrl: string;
  artist: string;
  location: string;
}

export interface IApiResponse {
  items: IArtistCard[];
  totalCount: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
}
