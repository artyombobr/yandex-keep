import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setDisplayNotes } from '../../actions';
import getSessionStorage from '../../helpers/getSessionStorage';
import { ColorsEntity, NotesEntity } from '../../shared';
import './Filter.scss';

function Filter(props: any) {
  const { colors, allNotes, dispatch } = props;
  const [activeFilter, setActiveFilter] = useState<number[]>(
    getSessionStorage('filter')
  );

  const handleColorClick = (id: number) => {
    if (activeFilter.indexOf(id) === -1) {
      setActiveFilter([...activeFilter, id]);
    } else {
      setActiveFilter(activeFilter.filter(idFilter => idFilter !== id));
    }
  };

  useEffect(() => {
    let filterNotes = allNotes.filter((note: any) => {
      if (activeFilter.indexOf(note.color) !== -1) {
        return note;
      }
      return false;
    });
    if (!activeFilter.length) {
      filterNotes = allNotes;
    }
    sessionStorage.setItem('filter', JSON.stringify(activeFilter));
    dispatch(setDisplayNotes(filterNotes));
  }, [activeFilter, allNotes]);

  return (
    <section className="tags">
      <div className="tags__inner">
        <h1 className="tags__title">Заметки</h1>
        {colors &&
          colors.map((color: ColorsEntity) => {
            const styles = {
              backgroundColor: `${color.color}`,
            };
            const checked = activeFilter.indexOf(color.id) !== -1;
            return (
              <label key={color.id} className="tag">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleColorClick(color.id)}
                />
                <span className="tag__span" style={styles} />
              </label>
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
