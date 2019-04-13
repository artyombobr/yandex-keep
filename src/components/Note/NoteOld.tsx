import moment from 'moment';
import 'moment/locale/ru';
import * as React from 'react';
import { useState } from 'react';
import {DataEntity, ItemsEntity, NotesEntity} from '../../shared';
import './Note.scss';

import { ReactComponent as Check } from './svg/check.svg';
import { ReactComponent as Edit } from './svg/edit.svg';
import { ReactComponent as Picture } from './svg/picture.svg';
import { ReactComponent as Site } from './svg/site.svg';
import { ReactComponent as Warning } from './svg/warning.svg';

function NoteOld(props: { data: DataEntity; note: NotesEntity }) {
  const data = props.data;
  const { type, title, text, attachments, color, items, tags, reminder, created, size } = props.note;

  function SetBackground() {
    const opacity = 0.4;
    if (color !== undefined) {
      let hex: string = data.colors[color].color;
      hex = hex.replace('#', '');
      let r: number = parseInt(hex.substring(0, 2), 16);
      let g: number = parseInt(hex.substring(2, 4), 16);
      let b: number = parseInt(hex.substring(4, 6), 16);
      r = Math.round(r * opacity + 255 * (1 - opacity));
      g = Math.round(g * opacity + 255 * (1 - opacity));
      b = Math.round(b * opacity + 255 * (1 - opacity));
      return {backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'};
    } else {
      return ({backgroundColor: '#fff'});
    }
  }

  function tagsList() {
    const list = [];
    if (tags !== undefined) {
      for (let i = 0; i < tags.length; i++) {
        list.push(<div className='note__tag' key={i}>{data.tags[tags[i]].tag}</div>);
      }
    }
    return list;
  }

  function linkCut(link: string) {
    const pos = link.indexOf('://');
    if (pos) {
      return link.substr(pos + 3);
    } else {
      return link;
    }
  }

  function attachmentsList() {
    const list = [];
    const listSites = [];
    const listImages = [];
    if (attachments !== undefined) {
      for (let i = 0; i < attachments.length; i++) {
        if (attachments[i].type === 'link') {
          listSites.push(
            <div className='site' key={i}>
              <Site />
              <a className='site__link' href={attachments[i].url}>{linkCut(attachments[i].url)}</a>
            </div>
          );
        } else {
          listImages.push(<img className='image' src={attachments[i].url} alt='Прикрепленное изображение' key={i} />);
        }
      }
    }
    if (listSites.length) { list.push(<div className='sites' key={0}>{listSites}</div>); }
    if (listImages.length) {
      list.push(
        <div className='images' key={1}>
          <Picture className='images__icon' />
          <div className='images__list'>{listImages}</div>
        </div>
      );
    }
    return list;
  }

  function reminderTime() {
    if (reminder !== undefined) {
      return (
        <div className='reminder'>
          <Warning />
          <div className='reminder__text'>{moment(reminder).fromNow()}</div>
        </div>
      );
    } else {
      return null;
    }
  }

  function renderText() {
    const [active, setActive] = useState(false);
    return (
      <div
        className={['note', size, active ? 'note_active' : ''].join(' ')}
        onClick={() => setActive(!active)}
      >
        <div className='note__reminder'>
          {reminderTime()}
          <div className='note__attachment'>
              <div className='note__main' style={SetBackground()}>
              <h1 className='note__title'>{title}</h1>
              <div className='note__text'>{text}</div>
              <div className='note__footer'>
                <div className='note__tags'>{tagsList()}</div>
                <div className='note__info'>
                  <div className='icons'>
                    <Check className='icons__item' />
                    <Edit className='icons__item' />
                  </div>
                  {moment(created).fromNow()}
                </div>
              </div>
            </div>
            {attachmentsList()}
          </div>
        </div>
      </div>
    );
  }

  function renderList() {
    let listChecked;
    let listNotChecked;
    if (items) {
      listChecked = items.map((item: ItemsEntity, index: number) => {
        if (item.checked) {
          return (
            <label className='checkbox' key={index}>
              <input type='checkbox' defaultChecked={true} />
              <span className='checkbox__span'>{item.text}</span>
            </label>
          );
        } else {
          return null;
        }
      });
      listNotChecked = items.map((item: ItemsEntity, index: number) => {
        if (!item.checked) {
          return (
            <label className='checkbox' key={index}>
              <input type='checkbox' />
              <span className='checkbox__span'>{item.text}</span>
            </label>
          );
        } else {
          return null;
        }
      });
    }
    const [active, setActive] = useState(false);
    return (
      <div
        className={['note', size, active ? 'note_active' : ''].join(' ')}
        onClick={() => setActive(!active)}
      >
        <div className='note__reminder'>
          {reminderTime()}
          <div className='note__attachment'>
            <div className='note__checklist'>
              <div className='note__main' style={SetBackground()}>
                <h1 className='note__title'>{title}</h1>
                <div className='note__list'>{listNotChecked}</div>
              </div>
              <div className='checklist'>{listChecked}</div>
              <div className='note__footer'>
                <div className='note__tags'>{tagsList()}</div>
                <div className='note__info'>
                  <div className='icons'>
                    <Check className='icons__item' />
                    <Edit className='icons__item' />
                  </div>
                  {moment(created).fromNow()}
                </div>
              </div>
            </div>
            {attachmentsList()}
          </div>
        </div>
      </div>
    );
  }

  function renderImage() {
    function image() {
      return (
        <div className='note__image'>
          <picture>
            <source media='(max-width: 320px)' srcSet='https://via.placeholder.com/320' />
            <source media='(max-width: 465px)' srcSet='https://via.placeholder.com/465' />
            <source media='(max-width: 650px)' srcSet='https://via.placeholder.com/650' />
            <img
              src='https://via.placeholder.com/1020'
              alt='Изображение'
            />
          </picture>
        </div>
      );
    }
    const [active, setActive] = useState(false);
    return (
      <div
        className={['note', size, active ? 'note_active' : ''].join(' ')}
        onClick={() => setActive(!active)}
      >
        <div className='note__reminder'>
          {reminderTime()}
          <div className='note__attachment'>
            <div className='note__main' style={SetBackground()}>
              {image()}
              <h1 className='note__title'>{title}</h1>
              <div className='note__text'>{text}</div>
              <div className='note__tags'>{tagsList()}</div>
              <div className='note__info'>
                <div className='icons'>
                  <Check className='icons__item' />
                  <Edit className='icons__item' />
                </div>
                {moment(created).fromNow()}
              </div>
            </div>
            {attachmentsList()}
          </div>
        </div>
      </div>
    );
  }

  let noteItem;

  switch (type) {
    case 'text':
      noteItem = renderText();
      break;
    case 'list':
      noteItem = renderList();
      break;
    case 'image':
      noteItem = renderImage();
      break;
    default:
      noteItem = renderText();
  }

  return (noteItem);
}

export default NoteOld;
