/*
 *  \
 *  \\,
 *   \\\,^,.,,.                    “Zero to Hero”
 *   ,;7~((\))`;;,,               <zerotohero.dev>
 *   ,(@') ;)`))\;;',    stay up to date, be curious: learn
 *    )  . ),((  ))\;,
 *   /;`,,/7),)) )) )\,,
 *  (& )`   (,((,((;( ))\,
 */

import fs from 'fs';
const fsp = fs.promises;

import axios from 'axios';

const file = 'unicorn.png';

const run = async () => {
  const content = await fsp.readFile(file);

  const postUrl = 'https://api.zerotohero.dev/null';

  const boundary = 'xxxxxxxyyyzzzxxx';
  const data = `--${boundary}
Content-Disposition: form-data; name="file"; filename="${file}"
Content-Type:application/octet-stream

`;
  const boundaryBuffer = Buffer.from(`
--${boundary}--

`, 'utf-8');

  const payload = Buffer.concat([
    Buffer.from(data, 'utf-8'),
    content,
    boundaryBuffer
  ]);

  const options = {
    url: postUrl,
    headers: {'Content-Type': `multipart/form-data; boundary=${boundary}`},
    body: payload
  };

  return axios.post(options.url, options.body, {
    headers: options.headers
  })
};

run()
  .then(data => console.log('upload succeeded', data))
  .catch(reason => console.error('upload errored', reason.message));