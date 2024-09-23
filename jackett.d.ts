declare interface JackettSearch {
  Results: Result[];
  Indexers: Indexer[];
}

declare interface Indexer {
  ID: string;
  Name: string;
  Status: number;
  Results: number;
  Error: null;
  ElapsedTime: number;
}

declare interface Result {
  FirstSeen: string;
  Tracker: string;
  TrackerId: string;
  TrackerType: string;
  CategoryDesc: string;
  BlackholeLink: null;
  Title: string;
  Guid: string;
  Link: null | string;
  Details: string;
  PublishDate: string;
  Category: number[];
  Size: number;
  Files: number | null;
  Grabs: number | null;
  Description: null | string;
  RageID: null;
  TVDBId: null;
  Imdb: null;
  TMDb: null;
  TVMazeId: null;
  TraktId: null;
  DoubanId: null;
  Genres: null;
  Languages: any[];
  Subs: any[];
  Year: number | null;
  Author: null;
  BookTitle: null;
  Publisher: null;
  Artist: null;
  Album: null;
  Label: null;
  Track: null;
  Seeders: number;
  Peers: number;
  Poster: null | string;
  InfoHash: null | string;
  MagnetUri: null | string;
  MinimumRatio: number | null;
  MinimumSeedTime: number | null;
  DownloadVolumeFactor: number;
  UploadVolumeFactor: number;
  Gain: number;
}
