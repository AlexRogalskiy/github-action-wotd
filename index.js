'use strict';

const core = require('@actions/core');
const path = require('path');
const http = require('https');
const fs = require('fs');

const config = require('./src/config');
const { notBlankOrElse } = require('./src/utils');

async function createImageBy(url, filePath, fileName) {
  const imagePath = path.join(filePath, `${fileName}.${config.extension}`);
  console.log(`Generating image with parameters: url=${url}, file=${imagePath}\n`);

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }

  const image = await fs.createWriteStream(imagePath);
  await http.get(url, resp => {
    resp.pipe(image);
  });

  return imagePath;
}

async function run() {
  const language = core.getInput('language');
  const pattern = core.getInput('pattern');
  const width = notBlankOrElse(core.getInput('width'), config.width);
  const height = notBlankOrElse(core.getInput('height'), config.height);

  const backgroundColor = notBlankOrElse(core.getInput('backgroundColor'), config.backgroundColor);
  const fontColor = notBlankOrElse(core.getInput('fontColor'), config.fontColor);
  const opacity = notBlankOrElse(core.getInput('opacity'), config.opacity);
  const colorPattern = notBlankOrElse(core.getInput('colorPattern'), config.colorPattern);

  const fileName = notBlankOrElse(core.getInput('name'), config.name);
  const filePath = notBlankOrElse(core.getInput('path'), config.path);

  let target = `${config.url}?language=${language}&pattern=${pattern}`;
  target = `${target}&width=${encodeURIComponent(width)}&height=${encodeURIComponent(height)}`;
  target = `${target}&backgroundColor=${backgroundColor}&fontColor=${fontColor}`;
  target = `${target}&opacity=${opacity}&colorPattern=${colorPattern}`;

  try {
    const imagePath = await createImageBy(target, filePath, fileName);
    core.info(`Storing word image by path: ${imagePath}`);
    core.setOutput('image', imagePath);
  } catch (e) {
    core.setFailed(`Cannot create word image by path: ${filePath}/${fileName}, message: ${e.message}`);
  }
}

module.exports = run;

if (require.main === module) {
  run();
}
