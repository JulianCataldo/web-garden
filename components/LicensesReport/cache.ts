import { Licenses } from './Props';

interface Cache {
  [key: string]: Licenses;
}

const cache: Cache = {};
export default cache;
