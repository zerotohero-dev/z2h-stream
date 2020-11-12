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

import axios from 'axios';
import FormData from 'form-data';

const run = async () => {
  const postUrl = 'https://api.zerotohero.dev/null';

  const formData = new FormData();
  formData.append('unicorn.png', fs.createReadStream('./unicorn.png'));

  const res = await axios.post(postUrl, formData, {
    headers: formData.getHeaders()
  });

  return res.data;
};

run()
  .then(data => console.log('upload succeeded', data))
  .catch(reason => console.error('upload errored', reason.message));