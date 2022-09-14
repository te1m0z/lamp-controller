const Sudoer = require("electron-sudo").default

const start = async () => {

    console.log(Sudoer)

    let options = { name: 'electron sudo application' },
        sudoer = new Sudoer(options);

    /* Spawn subprocess behavior */
    let cp = await sudoer.spawn(
        'echo', ['$PARAM'], { env: { PARAM: 'VALUE' } }
    );

    cp.on('close', () => {
        /*
          cp.output.stdout (Buffer)
          cp.output.stderr (Buffer)
        */
    });

    /* Exec subprocess behavior */
    let result = await sudoer.exec(
        'echo $PARAM', { env: { PARAM: 'VALUE' } }
    );
    /* result is Buffer with mixed (both stdout and stderr) output */
}


start();
