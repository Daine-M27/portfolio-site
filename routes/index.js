const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', async function(req, res, next) {
  // let svgFilename;
  // get captcha svg
  // fs.promises.readdir('./captchaSVGS')
  // .then(fileNames => {
  //   svgFilename = fileNames[Math.floor(Math.random()*fileNames.length)]
  //   console.log(svgFilename);
  //   res.render('index', { title: 'Daine Marshall - Web Developer', svg: svgFilename });

  // })
  res.render('index', { title: 'Daine Marshall - Web Developer', emailStatus: ''});
});



module.exports = router;
