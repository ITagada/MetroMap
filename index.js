const express = require('express');

const mainapp = express();
const port = process.env.port || 8080;
const mapapp = require('./map').createMapApplication(express);

mainapp.use("/map", mapapp);
mainapp.use(express.static(__dirname));


mainapp.get('/', (req, res) => {
	res.send(`
	  <!DOCTYPE html>
	  <html>
	  <head>
		<title>Redirect Alert</title>
	  </head>
	  <body>
		<script>
		  alert('Перенаправление в приложение...');
		  setTimeout(() => {
			window.location.href = '/map';
		  }, 100);
		</script>
	  </body>
	  </html>
	`);
  });

mainapp.listen(port, '0.0.0.0', function(err)
{
	if(err) {
		throw err;
	}
	console.log(`Server is listening on ${port}...`);
});

