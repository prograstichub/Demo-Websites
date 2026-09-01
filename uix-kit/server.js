const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 0;

app.use('/', express.static( 'examples' ));
app.use('/dist', express.static( 'dist' ));

app.get('/',function(req,res) {
	const homepage = path.join(__dirname,'./examples/index.html');
	res.sendFile( homepage );
  });

const server = app.listen(port, () => {
    const actualPort = server.address().port;
    console.log(`Frontend service listening on port: ${actualPort}, access http://localhost:${actualPort} in the web browser`);
});
