import * as React from "react";
import moment from 'moment';
import 'moment/locale/ru';
import {ReactComponent as Warning} from "../Note/svg/warning.svg";

interface CardProps {
  reminder: number
}

function Reminder(props: CardProps) {
  const { reminder } = props;
  return (
    <div className='reminder'>
      <Warning />
      <div className='reminder__text'>{moment(reminder).fromNow()}</div>
    </div>
  );
}

export default Reminder;
