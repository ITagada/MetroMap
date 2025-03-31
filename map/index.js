const path = require('path');


function createMapApplication(express)
{
  const application = express();
  
  application.use('/map/js', express.static(path.join(__dirname, 'js')));
  application.use('/map/css', express.static(path.join(__dirname, 'css')));
  application.use('/map/img', express.static(path.join(__dirname, 'img')));
  application.use('/map/webfonts', express.static(path.join(__dirname, 'webfonts')));
  application.use(express.static(path.join(__dirname, 'm')));;
  

  application.get("/", (req,res) => {
    res.sendFile(`${__dirname}/m/index.html`);
  });

  
  return application;
}


module.exports.createMapApplication = createMapApplication;





// app.listen(80, ()=> 
// {
//     console.log('Application is started');
// });




