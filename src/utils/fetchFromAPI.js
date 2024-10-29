import axios from "axios";

export const BASE_URL = "http://localhost:8080";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    // 'token': localStorage.getItem("LOGIN_USER")
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// Define function call API get list video from BE
export const getVideoAPI = async () => {
  try {
    const videoList = await axios.get(`${BASE_URL}/video/get-videos`);
    // console.log("videoList", videoList);
    return videoList;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// Define function call API get list type videos

export const getListTypeVideo = async () => {
  try {
    const listTypeVideo = await axios.get(`${BASE_URL}/video/get-types`);
    return listTypeVideo;
  } catch (err) {
    console.log(err);
  }
};

// Define function call API get video by type

export const getVideoByType = async (typeId) => {
  try {
    const videoList = await axios.get(`${BASE_URL}/video/get-videos/${typeId}`);
    console.log("videoList", videoList);
    return videoList;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// Define function call API video by ID

export const getVideoById = async (videoId) => {
  try {
    const videoById = await axios.get(
      `${BASE_URL}/video/video-detail/${videoId}`
    );
    console.log("videoById", videoById);
    return videoById;
  } catch (err) {
    console.log(err);
    return err;
  }
};
