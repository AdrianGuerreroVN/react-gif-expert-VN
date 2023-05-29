interface GifProps {
  id: string;
  title: string;
  images: imagesProps;
}

interface imagesProps {
  downsized_medium: sizedProps;
}

interface sizedProps {
  url: string;
}

/*
interface Data {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: {}[]
   }
  }
}
 

*/

export const getGifs = async (category: string) => {
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=PUTtiQ2I2oevYa8l9JXF7Ci3GpZMRRB7&q=" +
    category +
    "&limit=10";

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: GifProps) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
