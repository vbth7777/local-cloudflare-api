const express = require('express');
const app = express();
const port = 5466;
const { exec } = require('child_process');

app.post('/api/change-ip', (req, res) => {
  exec('warp-cli disconnect; warp-cli connect', (err, stdout, stderr) => {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    res.status(200).send('Success');
  });
});
app.post('/api/register', (req, res) => {
  exec('warp-cli register', (err, stdout, stderr) => {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    res.status(200).send(stdout);
  });
});
app.post('/api/delete', (req, res) => {
  exec('warp-cli delete', (err, stdout, stderr) => {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    res.status(200).send(stdout);
  });
});
app.get('/api/get-ip', (req, res) => {
  exec('curl https://ipv4.icanhazip.com/', (err, stdout, stderr) => {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    res.status(200).send(stdout);
  });
});
app.get('/api/get-status', (req, res) => {
  exec('warp-cli status', (err, stdout, stderr) => {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    res.status(200).send(stdout);
  });
});

app.listen(port);
