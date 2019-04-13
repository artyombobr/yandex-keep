import * as React from 'react';

function List(props: any) {
  const { items } = props;
  return (<div className='note__list'>{items.map((item: any) => (
    <label className='checkbox'>
      <input type='checkbox' />
      <span className='checkbox__span'>{item.text}</span>
    </label>
  ))}</div>);
}

export default List;
