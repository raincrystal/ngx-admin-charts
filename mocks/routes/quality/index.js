const buildQualityData = require('./buildQualityData');

const qualityData = buildQualityData();

exports.init = function(router) {
  router.get(
    '/project/quality',
    (req, res) => {
      res.json(qualityData);
    }
  );
};
