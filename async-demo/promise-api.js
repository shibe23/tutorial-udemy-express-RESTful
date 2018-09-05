const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 1 ...');
    reject(new Error('because somethion failed'));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2 ...');
    resolve(2);
  }, 2000);
});

// 並列で実行する
Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message));

  // 最初にfulfilledまたはrejectedされた結果を返す
  Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message));