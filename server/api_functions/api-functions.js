const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development'])

module.exports = {
  getAllGames: function(){
    return knex('game')
  },
  postOneGame: function(name,score){
    return knex('game')
    .insert({
      name,
      score
    });
  }
}
