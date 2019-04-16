import * as React from 'react';

function Tags(props: any) {
  const { note, tags } = props;
  return (
    <div className="note__tags">
      {note.tags &&
        tags &&
        note.tags.map((tag: any) => {
          return (
            <div className="note__tag" key={tags[tag].id}>
              {tags[tag].tag}
            </div>
          );
        })}
    </div>
  );
}

export default Tags;
