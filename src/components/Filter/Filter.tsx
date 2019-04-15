import React from 'react';
import { ColorsEntity } from '../../shared';
import {connect} from "react-redux";
import * as actionCreators from "../../actions";
import './Filter.scss';

function Filter(props: { colors: ColorsEntity[] }) {
  const colors = props.colors;
  return (
    <section className='tags'>
      <div className='tags__inner'>
        <h1 className='tags__title'>Заметки</h1>
        {colors &&
          colors.map((color: ColorsEntity) => {
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

const mapStateToProps=(state: any)=>{
  return {
    colors: state.colors
  };
};

export default connect(mapStateToProps, actionCreators)(Filter);
