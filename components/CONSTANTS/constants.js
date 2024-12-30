//Assets
import AlbumPP from "../../Assets/pp.jpeg";
import CountryCover from "../../Assets/ListeningPage/Backgrounds/Country.png";
import JazzCover from "../../Assets/ListeningPage/Backgrounds/Jazz.png";
import MetalCover from "../../Assets/ListeningPage/Backgrounds/Metal.png";
import PopCover from "../../Assets/ListeningPage/Backgrounds/Pop.png";
import RapCover from "../../Assets/ListeningPage/Backgrounds/Rap.png";
import RockAndRollCover from "../../Assets/ListeningPage/Backgrounds/RockAndRoll.png";
//Musics
export const profilePicture = AlbumPP;
export const Category = Object.freeze({
  CREATED_SONGS: "Created Songs",
  LIKED_SONGS: "Liked songs",
  DEBUG: "debug mode",
});
export const Colors = {
  ButtonBackground: "#262626",
  QuestBoxBackgroundColor: "#cccccc",
  ButtonText: "white",
  NormalText: "white",
  HeaderText: "white",
};
export const GENRES = [
  "Metal",
  "Rock",
  "Jazz",
  "Blues",
  "Lo-fi",
  "Japanese",
  "Pop",
  "Classical",
  "Hip-Hop",
  "Country",
  "EDM",
  "Soul",
  "Folk",
  "Reggae",
];
export const Musics = [
  {
    Name: "Country",
    Path: "../../Assets/Musics/Country.mp3",
    CoverImage: CountryCover,
  },
  {
    Name: "80sPop",
    Path: "../../Assets/Musics/80sPop.mp3",
    CoverImage: PopCover,
  },
  {
    Name: "Jazz",
    Path: "../../Assets/Musics/Jazz.mp3",
    CoverImage: JazzCover,
  },
  {
    Name: "Rock",
    Rock: "../../Assets/Musics/Rock.mp3",
    CoverImage: RockAndRollCover,
  },
  {
    Name: "Metal",
    Metal: "../../Assets/Musics/Metal.mp3",
    CoverImage: MetalCover,
  },
  {
    Name: "HipHop Rap",
    HipHopRap: "../../Assets/Musics/Raphiphop.mp3",
    CoverImage: RapCover,
  },
];
