import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setDisplayNotes } from '../../actions';
import { ColorsEntity } from '../../shared';
import './Filter.scss';

function Filter(props: any) {
  const { colors, allNotes, dispatch } = props;
  const [count, setCount] = useState<number[]>([]);
  const handleColorClick = (id: number) => {
    if (count.indexOf(id) === -1) {
      setCount([...count, id]);
    } else {
      setCount(count.filter(idFilter => idFilter !== id));
    }
  };
  useEffect(() => {
    let filterNotes = allNotes.filter((note: any) => {
      if (count.indexOf(note.color) !== -1) {
        return note;
      }
      return false;
    });
    if (!count.length) {
      filterNotes = allNotes;
    }
    dispatch(setDisplayNotes(filterNotes));
  }, [count]);

  return (
    <section className="tags">
      <div className="tags__inner">
        <h1 className="tags__title">Заметки</h1>
        {colors &&
          colors.map((color: ColorsEntity) => {
            const styles = {
              backgroundColor: `${color.color}`,
            };
            return (
              <div key={color.id} className="tag">
                <button
                  onClick={() => handleColorClick(color.id)}
                  className="tag__span"
                  style={styles}
                  type="button"
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}

const stateToProps = (state: any) => {
  return {
    colors: state.colors,
    allNotes: state.allNotes,
  };
};

export default connect(stateToProps)(Filter);
