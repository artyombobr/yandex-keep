import React from 'react';
import './ColorPicker.scss';

const ColorPicker = (props: any) => {
  const { colors, setData, dataNote } = props;
  return (
    <div>
      {colors.map((color: any) => {
        return (
          <button
            key={color.id}
            className="color-picker__item"
            onClick={() =>
              setData({
                ...dataNote,
                color: { color: color.color, id: color.id },
              })
            }
            style={{ backgroundColor: color.color }}
            type="button"
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
