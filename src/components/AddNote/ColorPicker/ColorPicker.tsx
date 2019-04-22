import React from 'react';

const ColorPicker = (props: any) => {
  const { colors, setData, dataNote } = props;
  return (
    <div>
      {colors.map((color: any) => {
        return (
          <button
            key={color.id}
            onClick={() =>
              setData({
                ...dataNote,
                color: { color: color.color, id: color.id },
              })
            }
            style={{ backgroundColor: color.color }}
            type="button"
          >
            {color.color}
          </button>
        );
      })}
    </div>
  );
};

export default ColorPicker;
