import React from 'react';
import './Filter.scss';

import { ColorsEntity } from '../../shared';

function Filter(props: { colors: ColorsEntity[] }) {
  const colors = props.colors;
  return (
    <section className='tags'>
      <div className='tags__inner'>
        <h1 className='tags__title'>Заметки</h1>
        {colors.map((color: ColorsEntity) => {
          const styles = {
            backgroundColor: `${color.color}`
          };
          return (
            <label key={color.id} className='tag'>
              <input type='checkbox' />
              <span className='tag__span' style={styles} />
            </label>
          )
        })}
      </div>
    </section>
  );
}

export default Filter;
