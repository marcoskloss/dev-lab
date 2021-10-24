// https://blog.heroku.com/best-practices-nodejs-errors

const http = require('http');

function fatalHandler(ctx) {
    return (err) =>  {
        console.log('called by', ctx);
        console.log(err);
        console.log('app should restart');
        process.exit(1);
    }
}

process.on('unhandledRejection', fatalHandler('unhandledRejection'));
process.on('uncaughtException', fatalHandler('uncaughtException'));

const server = http.createServer(async (req, res) => {
    if (req.url === '/promise-rejection') {
        await Promise.reject();     
        return res.end('call the cops');
    }

    if (req.url === '/await-too-long') {
        await new Promise((resolve) => {
            setInterval(resolve, 5000);
        });

        return res.end('returning after 5 secs');
        // other reqs are running ok
    }

    return res.end('<h1>Ok</h1>');
});


server.listen('3000', console.log('its alive'))
    .on('error', fatalHandler('on error'));
