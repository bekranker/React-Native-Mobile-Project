import { Category } from "./CONSTANTS/constants";
import MetaDatasJSONFiles from "../Datas/MetaDatasJSONFiles/LikedSongsData.json"

function ParseJsonToSongData(category){
  let parsedJson;
  if (category === Category.CREATED_SONGS) {
    parsedJson = JSON.parse(MetaDatasJSONFiles);
  }
  console.log(parsedJson);
  return parsedJson;
}

export { ParseJsonToSongData };

