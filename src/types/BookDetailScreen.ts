export default interface IBookData {
  id: number;
  title: string;
  authors: Array<any>;
  copyright?: boolean;
  bookshelves: Array<string>;
  download_count?: number;
  formats: any;
  languages?: Array<string>;
  media_type?: string;
  subjects: Array<string>;
}
