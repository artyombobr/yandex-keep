import React from 'react';
import './Tags.scss';

function Tags(props: any) {
  const { note, tags } = props;
  return (
    <div className="tags">
      {note.tags &&
        tags &&
        note.tags.map((tag: any) => {
          return (
            <div className="tags__tag" key={tags[tag].id}>
              {tags[tag].tag}
            </div>
          );
        })}
    </div>
  );
}

export default Tags;
