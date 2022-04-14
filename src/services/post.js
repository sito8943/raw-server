/* eslint-disable import/prefer-default-export */
import axios from "axios";

// https://server-docs.herokuapp.com

const FetchMarkdown = async (which) => {
  try {
    const response = await axios.post("http://localhost:9000", { markdown: which });
    const data = await response.data;
    if (data.error === undefined) return data;
    return { error: response.statusText };
  } catch (e) {
    return { error: String(e) };
  }
};

export { FetchMarkdown };
