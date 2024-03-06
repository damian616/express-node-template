//TODO: review comments :
//@Webpack build ejs templatre gets script tag insertend with src path
// since using server using Gateway with defined prefix if @ /route/index paths is using/including prefix
// then its required to manualy update created src path with '../' or else @deployment template wont locate scripts bundle
// Scripts require additional configuration to handle the above mentioned scenarios...


const path = require('path');
const fs = require('fs');
var ejs = require('ejs');

const client_path = path.join(__dirname, 'client/apps/');

const apps = [
  {
    name: 'app_a',
    appPath: 'app/views/app_a.ejs',
    entry: [ client_path + '/app_a/index.js' ],
    template: 'app/views/[name].ejs',
  },
  {
    name: 'app_b',
    appPath: 'app/views/app_b.ejs',
    entry: [ client_path + '/app_b/index.js' ],
    template: 'app/views/[name].ejs'
  }

];


const addScriptTagToTemplate = (app) => {
  var scriptSrc = `scripts/${app.name}/${app.name}.bundle.js`;
  var scriptTag = ejs.render('<script src="<%= src %>"></script>', {src: scriptSrc});
  fs.readFile(app.appPath, 'utf8', (err, data) => {
    if (err) throw err;
    if(data.indexOf(scriptTag) === -1) {
        var newData = data + scriptTag;
        fs.writeFileSync(app.appPath, newData);
    }
  });
}


apps.forEach(addScriptTagToTemplate);

const createWebpackConfig = (app) => {
  return {
    mode: "production",
    entry: app.entry,
    output: {
      path: path.resolve(__dirname, `public/scripts/${app.name}`),
      filename: `${app.name}.bundle.js`,
    },
    module: {
        rules: [{
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        }
      ],
    },
  }
}


module.exports = apps.map(createWebpackConfig);