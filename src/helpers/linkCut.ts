function linkCut(link: string) {
  const pos = link.indexOf('://');
  if (pos) {
    return link.substr(pos + 3);
  }
  return link;
}

export default linkCut;
