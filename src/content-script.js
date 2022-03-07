localStorage.setItem('amplitude-debug', true);
console.log('Amplitude Debug Enabled: ' + localStorage.getItem('amplitude-debug'));

window.addEventListener('message', function (event) {
  const { data } = event;

  if (data.source === 'amplitude') {
    const amplitude = JSON.parse(data.amplitude);

    console.log(amplitude);
  }
});