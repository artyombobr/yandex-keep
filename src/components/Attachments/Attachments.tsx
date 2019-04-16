import * as React from 'react';
import { ReactComponent as Site } from '../Note/svg/site.svg';
import { ReactComponent as Picture } from '../Note/svg/picture.svg';

function Attachments(props: any) {
  function linkCut(link: string) {
    const pos = link.indexOf('://');
    if (pos) {
      return link.substr(pos + 3);
    }
    return link;
  }
  const { attachments } = props;
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
  if (listSites.length) {
    list.push(
      <div className="sites" key={0}>
        {listSites}
      </div>
    );
  }
  if (listImages.length) {
    list.push(
      <div className="images" key={1}>
        <Picture className="images__icon" />
        <div className="images__list">{listImages}</div>
      </div>
    );
  }
  return <>{list}</>;
}

export default Attachments;
