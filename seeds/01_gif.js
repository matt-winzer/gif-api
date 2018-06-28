exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "gif"; ALTER SEQUENCE gif_id_seq RESTART WITH 11;')
    .then(function () {
      var gifs = [{
        id: 1,
        gifUrl: 'https://media.giphy.com/media/PhKhSXofSAm3e/giphy.gif',
        description: 'Noice'
      }, {
        id: 2,
        gifUrl: 'https://media.giphy.com/media/mgqefqwSbToPe/giphy.gif',
        description: 'Cool'
      }, {
        id: 3,
        gifUrl: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
        description: 'Hooray'
      }, {
        id: 4,
        gifUrl: 'https://media.giphy.com/media/6QJ4Yi7VAkG8E/giphy.gif',
        description: 'Ballons'
      }, {
        id: 5,
        gifUrl: 'https://media.giphy.com/media/TL6poLzwbHuF2/giphy.gif',
        description: 'Dude'
      }, {
        id: 6,
        gifUrl: 'https://media.giphy.com/media/3o6UBpHgaXFDNAuttm/giphy.gif',
        description: 'Fine'
      }, {
        id: 7,
        gifUrl: 'https://media.giphy.com/media/TlK63EQZufmdFu0xFqo/giphy.gif',
        description: 'Congrats'
      }, {
        id: 8,
        gifUrl: 'https://media.giphy.com/media/sRckwAZIKLrPi/giphy.gif',
        description: 'Pretzel'
      }, {
        id: 9,
        gifUrl: 'https://media.giphy.com/media/11Ej01Grffnr20/giphy.gif',
        description: 'Explode'
      }, {
        id: 10,
        gifUrl: 'https://media.giphy.com/media/eMeMQ0Y4DHS2k/giphy.gif',
        description: 'Pizza'
      }];
      return knex('gif').insert(gifs);
    });
};