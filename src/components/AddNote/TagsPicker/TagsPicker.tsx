import React from 'react';
import './TagsPicker.scss';

const TagsPicker = (props: any) => {
  const { tags, dataNote, handleTagClick } = props;
  return (
    <div className="tags-picker">
      {tags.map((tag: any) => {
        const checked = dataNote.tags.indexOf(tag.id) !== -1;
        console.log(checked);
        return (
          <div
            key={tag.id}
            className={
              'tags-picker__tag' + (checked ? ' tags-picker__tag_active' : '')
            }
            onClick={() => handleTagClick(tag.id)}
          >
            {tag.tag}
          </div>
        );
      })}
    </div>
  );
};

export default TagsPicker;
