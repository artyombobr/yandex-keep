import React from 'react';
import linkCut from '../../helpers/linkCut';
import './Attachments.scss';

import { ReactComponent as Site } from '../Note/svg/site.svg';
import { ReactComponent as Picture } from '../Note/svg/picture.svg';

const Attachments = (props: any) => {
  const { attachments, isEdit } = props;
  const list = [];
  const listSites = [];
  const listImages = [];
  if (attachments !== undefined) {
    for (let i = 0; i < attachments.length; i++) {
      if (attachments[i].type === 'link') {
        listSites.push(
          <div className="site" key={i}>
            <Site />
            <a className="site__link" href={attachments[i].url}>
              {linkCut(attachments[i].url)}
            </a>
          </div>
        );
      } else {
        listImages.push(
          <img
            className="image"
            src={attachments[i].url}
            alt="Прикрепленное изображение"
            key={i}
          />
        );
      }
    }
  }
  listSites.length &&
    list.push(
      <div className="sites" key={0}>
        {listSites}
      </div>
    );
  listImages.length &&
    list.push(
      <div className="images" key={1}>
        <Picture className="images__icon" />
        <div className="images__list">{listImages}</div>
      </div>
    );
  return <>{list}</>;
};

export default Attachments;
