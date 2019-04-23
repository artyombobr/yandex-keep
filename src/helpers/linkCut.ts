function linkCut(link: string) {
  const pos = link.indexOf('://');
  if (pos !== -1) {
    return link.substr(pos + 3);
  }
  return link;
}

export default linkCut;
