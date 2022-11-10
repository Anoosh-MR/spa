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

export const getMultipleFiles = async (title) => {
  console.log(title);
  try {
    const { data } = await axios.post(apiUrl + "getFiles", { title });
    return data;
  } catch (error) {
    throw error;
  }
};
