import { Category } from "./CONSTANTS/constants";
import MetaDatasJSONFiles from "../Datas/MetaDatasJSONFiles/LikedSongsData.json"

function ParseJsonToSongData(){
  return MetaDatasJSONFiles;
}

export { ParseJsonToSongData };

