import React from 'react';
import './List.scss';

function List(props: any) {
  const { items } = props;
  console.log(items);
  return items.map((item: any, index: number) => (
    <div className="checkbox" key={index.toString()}>
      <input defaultChecked={item.checked} type="checkbox" />
      <span className="checkbox__span">{item.text}</span>
    </div>
  ));
}

export default List;
