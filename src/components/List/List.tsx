import * as React from 'react';

function List(props: any) {
  const { items, checked } = props;
  return items.map((item: any, index: number) => (
    <div className="checkbox" key={index.toString()}>
      <input defaultChecked={checked} type="checkbox" />
      <span className="checkbox__span">{item.text}</span>
    </div>
  ));
}

export default List;
