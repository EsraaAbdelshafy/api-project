
// export interface IMovie {
//   backdrop_path: string;
//   id: number;
//   title: string;
//   original_title: string;
//   overview: string;
//   poster_path: string;
//   media_type: string;
//   adult: boolean;
//   original_language: string;
//   genre_ids: number[];
//   popularity: number;
//   release_date: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
//   name:string;
// }
export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}