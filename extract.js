const fs = require('fs');
const content = fs.readFileSync(
  'C:\\Users\\Almudena\\.gemini\\antigravity-ide\\brain\\bf7803df-bb97-47b3-80a6-55dd31a0ee3b\\.system_generated\\steps\\62\\content.md',
  'utf-8'
);

// Use regex to strip HTML tags
const text = content
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

fs.writeFileSync('extracted_text.txt', text);
console.log('Extracted text written to extracted_text.txt');
