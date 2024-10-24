import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://dream-craft-server.vercel.app",
  baseURL: "https://fiesta-flex.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
