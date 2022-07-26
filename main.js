/**
 * Truncate text by sentences according to given limit
 * @param {string} text
 * @param {number} limit
 */
function truncate(text, limit = 255) {
  // Match sentences by . or ! or ?
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);

  let reduced = sentences?.reduce((acc, cur) => {
    acc = (acc + cur).length < limit ? acc + cur : acc;
    return acc;
  });

  if (sentences && sentences[0].length > limit) {
    reduced = `${reduced.slice(0, limit - 3)}...`;
  }

  return reduced || text;
}

const str = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
const str2 = "Very short sentence";
console.log(truncate(str, 255));
console.log(truncate(str, 455));
console.log(truncate(str2, 100));
