import * as React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './Reminder.scss';

import { ReactComponent as Warning } from '../Note/svg/warning.svg';

function Reminder(reminder: any) {
  return (
    <div className="reminder">
      <Warning />
      <div className="reminder__text">{moment(reminder).fromNow()}</div>
    </div>
  );
}

export default Reminder;
