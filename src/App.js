import {useState} from 'react';
import { Tags } from './Tags';
import { Images } from './Images';
import { Tagger } from './Tagger';

function App() {
  // const [tags, setTags] = useState(new Set(["#hello", "#city"]))
  const [tags, setTags] = useState(new Set([]))
  // object full of images added to the app 
  const [images, setImages] = useState({});
  const [currentTag, setCurrentTag] = useState("");
  const {currentImg, setCurrentImg} = useState("");
  const parseUniqueTags = (tagString) => {
    return new Set(tagString.split(" "))
  }

  const savePhoto = (photo) => {
    setImages({
      ...images,
      // id, href, tags
      [photo.id]: {
        id: photo.id,
        href: photo.href,
        tags: parseUniqueTags(photo.tags)
      }
      
    })
  }

  return (
    <>
      <span>App</span>
       <Tags tags={tags} />
       <Images photos={images}/>
       <Tagger savePhoto={savePhoto} />
    </>
  );
}

export default App;