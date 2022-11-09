import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = "http://localhost:5000/api/post/";

export const multipleFilesUpload = async (data, options) => {
  try {
    await axios.post(apiUrl + "fileUpload", data, options);
    toast.success("Image successfully uploaded");
  } catch (error) {
    toast.error("Image upload failed!!!");
  }
};

export const getMultipleFiles = async (user_id) => {
  try {
    const { data } = await axios.get(apiUrl + "getFiles", user_id);
    return data;
  } catch (error) {
    throw error;
  }
};
