{
  const sendApiRequest = (query, callback) => {
    console.log(`executing... ${query}`);
    setTimeout(() => {
      console.log(`executed: ${query}`);
      callback(null, { life: 42}); // nodeback
    }, 1000);
  };

  sendApiRequest({ user: 'me@volkan.io'}, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data);
  });
}

{
  const numbers = [1,2,3,4,5,6,7];
  const even = (n) => n % 2 === 0;
  const evenNumbers = number.filter(even); // [2,4,6]
}

{
  const onBtnClick = (evt) => {
    void evt;
    consoloe.log('Clicked');
  };

  const btn = document.querySelector('#btn');
  btn.addEventListener('click', onBtnClick);
}

{
  downloadImage((data) => {
    resize(data);
  });
}

{
  downloadImage(data)
    .then(data => {resize(data);})
    .catch((reason) => {void reason;})
}

{
  const run = async () => {
    const data = await downloadImage(data)
    resize(data);
  };
}
