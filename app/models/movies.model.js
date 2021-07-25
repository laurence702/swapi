module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movies", {
      title: {
        type: Sequelize.STRING
      },
      episode_id: {
        type: Sequelize.INTEGER
      },
      opening_crawl: {
        type: Sequelize.TEXT
      },
      director: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATEONLY
      },
      created: {
        type: Sequelize.DATE
      },
      url: {
        type: Sequelize.STRING
      },
    });
  
    return Movie;
  };
  