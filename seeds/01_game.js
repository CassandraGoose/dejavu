exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex.raw('delete from game; alter sequence game_id_seq restart with 6')
   .then(function() {
     const games = [{
       id:1,
       name: 'Cass',
       score: 57
     }, {
       id:2,
       name: 'Dill',
       score: 56
     }, {
       id:3,
       name: 'Patrick Smith',
       score: 12
     }, {
       id:4,
       name: 'Phil',
       score: 2,
     }, {
       id:5,
       name: 'CJ',
       score: 4,
     }];
     return knex('game').insert(games)
   });
};
