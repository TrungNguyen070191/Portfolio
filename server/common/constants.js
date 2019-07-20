let collections = {};

const collectionsName = {
  ACCOUNT: 'ipvn_account',
  USER: 'ipvn_users',
  POST: 'ipvn_posts'
};

const ptfCollectionsName = {
  ACCOUNT: 'ptf_account',
  USER: 'ptf_user',
  POST: 'ipvn_posts'
};


const role = {
  ADMIN: 1,
  USER: 0
};

const status = {
  NEW: 0,
  SECONDHAND: 1
};

collections.collectionsName = collectionsName;
collections.ptfCollectionsName = ptfCollectionsName;
collections.role = role;
collections.status = status;

module.exports = collections;
