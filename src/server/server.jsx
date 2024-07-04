import express from 'express';
import {StaticRouter} from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/App';
import fs from 'fs';
import HomeMeta from "../client/components/HomeMeta";

const app = express();
app.use('/static', express.static(__dirname));
const PORT = process.env.PORT;

function renderFullPage(html,meta) {
  console.log()
  return `
    <!DOCTYPE html>
    <html>
      <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <script defer src="/static/client.js"></script>
    ${meta}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

const createReactApp = async (location) => {
  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );
  console.log("..........reactApp",reactApp);
  const meta = ReactDOMServer.renderToString(
    <HomeMeta />
  )
  console.log("...........meta",meta);
  // const html = await fs.promises.readFile(`${__dirname}/index.html`, 'utf-8');
  // console.log(".............html",html);
  // const reactHtml = html.replace(
  //   '<div id="root"></div>', `<div id="root">${reactApp}</div>`);
  // console.log(".............html 111",reactHtml);
  const renderedData = renderFullPage(reactApp, meta)
  return renderedData;
  // return reactHtml
};

app.get('*', async (req, res) => {
  const indexHtml = await createReactApp(req.url);
  res.status(200).send(indexHtml);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});