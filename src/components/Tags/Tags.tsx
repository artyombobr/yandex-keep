import * as React from 'react';

function Tags(props: any) {
  const {data, note} = props;
  return(<div className='note__tags'>
      {note.tags.map((tag: any) => {
        return (<div className='note__tag'>{data.tags[tag].tag}</div>)
      })}
    </div>
  )
}

export default Tags;
