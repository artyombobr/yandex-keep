import React from 'react';

const TagsPicker = (props: any) => {
  const { tags, handleTagClick } = props;
  return (
    <div>
      {tags.map((tag: any) => {
        return (
          <button
            key={tag.id}
            onClick={() => handleTagClick(tag.id)}
            type="button"
          >
            {tag.tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagsPicker;
