import {useState} from 'react';
export const Tagger = ({ saveImage }) => {
  //   console.log(tags);

  const noop = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
  }

  const [href, setHref] = useState("")
  const [id, setId] = useState("")
  const [tags, setTags] = useState("")

  return <form onSubmit={noop}>
    <input type="text" name="href" id="" placeholder="href" 
      value={href}
      onChange={(ev) => setHref(ev.target.value)}/>
    <input type="text" name="id" id="" placeholder="id"
      value={id}
      onChange={(ev) => setId(ev.target.value)}/>
    <input type="text" name="tags" id="" placeholder="#t1 #t2"
      value={tags}
      onChange={(ev) => setTags(ev.target.value)}/>
    <button onClick={(ev)=>saveImage({
      href: href,
      id: id,
      tags: tags
    })}>Save</button>
  </form>;
};