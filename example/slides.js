import React from 'react';

const referralParams = 'utm_source=test-driven-carousel&utm_medium=referral';

const getUserNameUrl = username =>
  `https://unsplash.com/@${username}?${referralParams}`;

const getAttribution = ({ name, username }) => (
  <>
    Photo by <a href={getUserNameUrl(username)}>{name}</a> on{' '}
    <a href={`https://unsplash.com/?${referralParams}`}>Unsplash</a>
  </>
);

export default [
  {
    description: 'Seattle',
    attribution: getAttribution({
      name: 'Ganapathy Kumar',
      username: 'ghumar2175'
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080' +
      '&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e'
  },
  {
    description: 'Barcelona',
    attribution: getAttribution({
      name: 'Enes',
      username: 'royalfound'
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=1080' +
      '&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=e836c604036680eeba5c77ebdb171c73'
  },
  {
    description: 'New York',
    attribution: getAttribution({
      name: 'Anthony Delanoix',
      username: 'anthonydelanoix'
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?w=1080' +
      '&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=54a272d03f5c06c416e8899f113dff06'
  },
  {
    description: 'Rio de Janeiro',
    attribution: getAttribution({
      name: 'Agustín Diaz',
      username: 'agussdiaz28'
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1080' +
      '&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=966003791f746c210b73863cf6170e6c'
  }
];
