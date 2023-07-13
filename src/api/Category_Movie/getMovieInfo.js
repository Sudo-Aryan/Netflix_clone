import base_url from "../Basic_API_Info/base_url";
import api_key from "../Basic_API_Info/api_key";
import { popular, upcoming, top_rated, now_playing } from "../Basic_API_Info/category";

const getPopular = `${base_url}/${popular}?api_key=${api_key}`;
const getUpcoming = `${base_url}/${upcoming}?api_key=${api_key}`;
const getTopRated = `${base_url}/${top_rated}?api_key=${api_key}`;
const getNowPlaying = `${base_url}/${now_playing}?api_key=${api_key}`;

export { getPopular , getUpcoming, getTopRated, getNowPlaying };