const fs = require('fs');
const path = require('path');
const readline = require('readline');;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const appDir = 'client/apps/';
let tamplatePath = path.resolve(__dirname, 'app/views');
let appPath;
let indexPath;

function continueProgram() {
    console.log("Basic layout created.");
    // Create other files
    rl.question('Do you want to create any additional scripts? (y/n) ', async (reply) => {
        let question = 'Do you want to create any additional scripts? (y/n) '
        let answer = await checkAnswer(question, reply);
        if (answer === 'yes' || answer === 'y'){
            createScript(appPath, indexPath);
        } else {
            console.log("Creation complete successfully.");
            rl.close();
        }
    });
}

const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

const createFile = (filePath) => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '', 'utf8');
    }
}

createApp = () => {
    rl.question('What is the name of the app folder you want to create? ', (appName) => {
        // Create app folder
        appPath = path.join(__dirname, appDir, appName);
        createDirectory(appPath);
        // Create index.js
        indexPath = path.join(appPath, 'index.js');
        createFile(indexPath);

        // Create template ejs
        const viewsPath = path.join(tamplatePath, `${appName}.ejs`)
        createFile(viewsPath);

        // Create styles folder
        const stylesPath = path.join(appPath, 'styles');
        createDirectory(stylesPath);

        // Create index.scss
        const indexScssPath = path.join(stylesPath, 'index.scss');
        if (!fs.existsSync(indexScssPath)) {
            fs.writeFileSync(indexScssPath, '*{\n margin: 0;\n padding : 0;\n box-sizing: border-box;\n background: #2fa8cc;\n}', 'utf8');      
        }

    // Import index.scss into index.js
    fs.appendFileSync(indexPath, `import './styles/index.scss';\n`, 'utf8');

    rl.question('Do you want to update webpack.config? (y/n) ', async (reply) => {
        let question = 'Do you want to update webpack.config? (y/n) '
        let answer = await checkAnswer(question, reply);
        if (answer === 'yes' || answer === 'y') {
            updateWebpackConfig(appName, () => {
                console.log("webpack.config updated.");

            });
        } else {
            continueProgram();
        }
    });
})
}


createScript = (appPath,indexPath) => {
    rl.question('What is the new script name? ', (fileName) => {
        const filePath = path.join(appPath, `${fileName}.js`);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, `console.log('${fileName} is connected');`, 'utf8');
        }
        // Import the newly created file into index.js
        fs.appendFileSync(indexPath, `import './${fileName}';\n`, 'utf8');

        rl.question('Do you want to create any additional scripts? (y/n) ', async (reply) => {
            let question = 'Do you want to create any additional scripts? (y/n) '
            let answer = await checkAnswer(question, reply);
            if (answer === 'yes' || answer === 'y'){
                createScript(appPath,indexPath);
            } else {
                console.log("Creation complete successfully.");
                rl.close();
            }
        });
    });
}




rl.question('Do you want to create another app? (y/n) ', async (reply) => {
    let question = 'Do you want to create another app? (y/n) '
    let answer = await checkAnswer(question, reply);
    if (answer === 'yes' || answer === 'y') {
        createApp();
    } else {
        rl.close();}
})


function updateWebpackConfig(appName) {
    const webpackConfigPath = path.join(__dirname, 'webpack.config.js');
    if (fs.existsSync(webpackConfigPath)) {
        let fileContent = fs.readFileSync(webpackConfigPath, 'utf8');

        // use regular expressions to find the apps array in the file content
        let match = fileContent.match(/const\s+apps\s+=\s+\[([\s\S]*?)\];/);
        if (match) {
            // extract the apps array as a string
            let appsString = match[1];

            // add the new app object to the apps array string
            appsString += `,\n  {
                name: '${appName}',
                appPath: 'app/views/${appName}.ejs',
                entry: [ client_path + '/${appName}/index.js' ],
                template: 'app/views/[name].ejs',
              }`;

            // replace the old apps array string with the updated one
            fileContent = fileContent.replace(match[0], `const apps = [${appsString}\n];`);

            // write the updated file content back to the webpack config file
            fs.writeFileSync(webpackConfigPath, fileContent);
        }
    }
    continueProgram();
}

function checkAnswer(question, answer) {
    if (!['yes', 'y', 'no', 'n'].includes(answer)) {
        console.log("Please enter 'yes' or 'no' to continue");
        console.log("Terminating app..");
        rl.close();
        // rl.question(question, (answer) => checkAnswer(question, answer));
    } else {
        return answer;
    }
}