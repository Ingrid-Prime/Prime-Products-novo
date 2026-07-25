const cp = require('child_process');
const output = cp.execSync('git ls-files public/images/produtos/combate-incendio').toString();
const files = output.split('\n').filter(Boolean);
files.forEach(f => {
  const lower = f.toLowerCase();
  if (f !== lower) {
    cp.execSync('git mv -f "' + f + '" "' + lower + '"');
    console.log('Renamed', f, 'to', lower);
  }
});
