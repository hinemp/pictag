import { useState } from 'react';
import { Tags } from './Tags';
import { Images } from './Images';
import { Tagger } from './Tagger';

function App() {
  // const [tags, setTags] = useState(new Set(["#hello", "#city"]))
  const [tags, setTags] = useState(new Set([]))
  // object full of images added to the app 
  const [images, setImages] = useState({});
  const [currentTag, setCurrentTag] = useState("");
  const { currentImg, setCurrentImg } = useState("");
  const parseUniqueTags = (tagString) => {
    return new Set(tagString.split(" "))
  }

  const saveImage = image => {
    const imageTags = new Set(image.tags.split(/\s+/));
    setImages({
      ...images,
      [image.id]: {
        id: image.id,
        href: image.href,
        tags: imageTags,
      },
    });
    setTags(new Set([...tags, ...imageTags]));
    setCurrentImg(image.id);
  };


  return (
    <>
      <span>App</span>
      <Tags tags={tags} />
      <Images photos={images} />
      <Tagger saveImage={saveImage} />
    </>
  );
}

export default App;