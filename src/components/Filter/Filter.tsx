import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setDisplayNotes } from '../../actions';
// eslint-disable-next-line no-unused-vars
import { ColorsEntity } from '../../shared';
import './Filter.scss';

function Filter(props: any) {
  const { colors, allNotes, dispatch } = props;
  const [activeFilter, setActiveFilter] = useState<number[]>([]);

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
    dispatch(setDisplayNotes(filterNotes));
  }, [activeFilter]);

  return (
    <section className="tags">
      <div className="tags__inner">
        <h1 className="tags__title">Заметки</h1>
        {colors &&
          colors.map((color: ColorsEntity) => {
            const styles = {
              backgroundColor: `${color.color}`,
            };
            const style =
              activeFilter.indexOf(color.id) !== -1 ? ' tag__span_active' : '';
            return (
              <div key={color.id} className="tag">
                <button
                  onClick={() => handleColorClick(color.id)}
                  className={classNames('tag__span', style)}
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
