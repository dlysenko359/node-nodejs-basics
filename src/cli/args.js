const parseArgs = () => {
    process.argv.forEach(function (val, index, array) {
        if(val.includes('--'))
            console.log(val.replace('--', '') + ' is ' + array[index+1]);
    });
};

parseArgs();