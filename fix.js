const fs = require('fs');
let svg = fs.readFileSync('aman-lanyard.svg', 'utf8');
let b64 = fs.readFileSync('avatar_b64.txt', 'utf8').replace(/\s+/g, '');

const startTag = '<!-- Stylized avatar: glowing "A" with coder hat -->';
const endTag = '<!-- Name — "Aman Singh" with animated gradient -->';

const startIndex = svg.indexOf(startTag);
const endIndex = svg.indexOf(endTag);

if (startIndex > -1 && endIndex > -1) {
    const before = svg.substring(0, startIndex);
    const after = svg.substring(endIndex);
    const newImage = '      <!-- Avatar image -->\n      <image x="151" y="353" width="118" height="118" href="data:image/jpeg;base64,' + b64 + '" clip-path="url(#avatarclip)" />\n\n      ';
    
    fs.writeFileSync('aman-lanyard.svg', before + newImage + after, 'utf8');
    console.log('Successfully injected base64 image!');
} else {
    console.log('Could not find tags in SVG!');
}
