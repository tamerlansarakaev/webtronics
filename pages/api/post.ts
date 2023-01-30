import axios from 'axios';

interface IPostItem {
  url: string;
  data: {
    name: string;
    phone: string;
    email: string;
  };
}

export const postData = async ({ url, data }: IPostItem) => {
  return await axios.post(url, {
    data,
  });
};

