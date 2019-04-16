import * as React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { ReactComponent as Warning } from '../Note/svg/warning.svg';

interface CardProps {
  isEdit: boolean;
  reminder: number;
}

function Reminder(props: CardProps) {
  const { reminder, isEdit } = props;
  return (
    <div className="reminder">
      <Warning />
      <div className="reminder__text">
        {isEdit ? (
          <input
            type="datetime-local"
            defaultValue={new Date().toISOString().substr(0, 16)}
          />
        ) : (
          moment(reminder).fromNow()
        )}
      </div>
    </div>
  );
}

export default Reminder;
