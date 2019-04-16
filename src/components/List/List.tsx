import * as React from 'react';

function List(props: any) {
  const { items } = props;
  return (
    <div className="note__list">
      {items.map((item: any, index: number) => (
        <div className="checkbox" key={index.toString()}>
          <div className="checkbox__span">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
