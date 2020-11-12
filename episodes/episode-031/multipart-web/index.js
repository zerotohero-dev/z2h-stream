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

import axios from 'axios';
import FormData from 'form-data';

import { unicorn as base64 } from './unicorn';

const run = async () => {
  const postUrl = 'https://api.zerotohero.dev/null';

  const blob = await fetch(base64).then(res => res.blob());
  const formData = new FormData();
  formData.append('unicorn.png', blob);

  const res = await axios.post(postUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return res.data;
};

run()
  .then(data => console.log('upload succeeded', data))
  .catch(reason => console.error('upload errored', reason.message));