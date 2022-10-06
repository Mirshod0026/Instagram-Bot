const axios = require("axios");

class InstagramController {
  async Insta_Convertor_Video(insta_link) {
    try {
      const options = {
        method: "GET",
        url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
        params: {
          url: insta_link
        },
        headers: {
          "X-RapidAPI-Key":
            "a5d6adc0c5msh01c2cb6bd94397ep1255afjsnbe2479545631",
          "X-RapidAPI-Host":
            "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      const Insta_video = await response.data.media;

      return Insta_video;
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports.InstagramController = new InstagramController();