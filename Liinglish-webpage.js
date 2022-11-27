var tocyrillic = false;
function getAllTextNodes() {
  var walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  var node;
  var textNodes = [];

  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }
  return textNodes;
}
function cyrillic(sentence) {
  sentence = sentence.replace(/A/g, "\u0410");
  sentence = sentence.replace(/\u00c4/g, "\u04d2");
  sentence = sentence.replace(/B/g, "\u0411");
  sentence = sentence.replace(/D/g, "\u0414");
  sentence = sentence.replace(/E/g, "\u0415");
  sentence = sentence.replace(/\u00cb/g, "\u0401");
  sentence = sentence.replace(/G/g, "\u0413");
  sentence = sentence.replace(/H/g, "\u0425");
  sentence = sentence.replace(/K/g, "\u041a");
  sentence = sentence.replace(/L/g, "\u041b");
  sentence = sentence.replace(/M/g, "\u041c");
  sentence = sentence.replace(/N/g, "\u041d");
  sentence = sentence.replace(/O/g, "\u041e");
  sentence = sentence.replace(/\u00d6/g, "\u04e6");
  sentence = sentence.replace(/P/g, "\u041f");
  sentence = sentence.replace(/R/g, "\u0420");
  sentence = sentence.replace(/S/g, "\u0421");
  sentence = sentence.replace(/T/g, "\u0422");
  sentence = sentence.replace(/U/g, "\u0423");
  sentence = sentence.replace(/\u00dc/g, "\u04f0");
  sentence = sentence.replace(/V/g, "\u0412");
  sentence = sentence.replace(/Y/g, "\u0418");
  sentence = sentence.replace(/\u00df/g, "\u04e4");
  sentence = sentence.replace(/a/g, "\u0430");
  sentence = sentence.replace(/\u00e4/g, "\u04d3");
  sentence = sentence.replace(/b/g, "\u0431");
  sentence = sentence.replace(/d/g, "\u0434");
  sentence = sentence.replace(/e/g, "\u0435");
  sentence = sentence.replace(/\u00eb/g, "\u0451");
  sentence = sentence.replace(/g/g, "\u0433");
  sentence = sentence.replace(/h/g, "\u0445");
  sentence = sentence.replace(/k/g, "\u043a");
  sentence = sentence.replace(/l/g, "\u043b");
  sentence = sentence.replace(/m/g, "\u043c");
  sentence = sentence.replace(/n/g, "\u043d");
  sentence = sentence.replace(/o/g, "\u043e");
  sentence = sentence.replace(/\u00f6/g, "\u04e7");
  sentence = sentence.replace(/p/g, "\u043f");
  sentence = sentence.replace(/r/g, "\u0440");
  sentence = sentence.replace(/s/g, "\u0441");
  sentence = sentence.replace(/t/g, "\u0442");
  sentence = sentence.replace(/u/g, "\u0443");
  sentence = sentence.replace(/\u00fc/g, "\u04f1");
  sentence = sentence.replace(/v/g, "\u0432");
  sentence = sentence.replace(/y/g, "\u0438");
  sentence = sentence.replace(/\u00ff/g, "\u04e5");
  return sentence;
}

function translate_text(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/o/g, "y");
  sentence = sentence.replace(/e/g, "o");
  sentence = sentence.replace(/i/g, "a");
  sentence = sentence.replace(/u/g, "e");
  sentence = sentence.replace(/c/g, "m");
  sentence = sentence.replace(/f/g, "h");
  sentence = sentence.replace(/j/g, "d");
  sentence = sentence.replace(/q/g, "v");
  sentence = sentence.replace(/w/g, "t");
  sentence = sentence.replace(/x/g, "g");
  sentence = sentence.replace(/z/g, "k");
  sentence = sentence.replace(/bl/g, "o");
  sentence = sentence.replace(/br/g, "u");
  sentence = sentence.replace(/dr/g, "\u00fc");
  sentence = sentence.replace(/gh/g, "p");
  sentence = sentence.replace(/gl/g, "s");
  sentence = sentence.replace(/gr/g, "\u00ff");
  sentence = sentence.replace(/gu/g, "b");
  sentence = sentence.replace(/kn/g, "v");
  sentence = sentence.replace(/kr/g, "\u00e4");
  sentence = sentence.replace(/ks/g, "b");
  sentence = sentence.replace(/lm/g, "v");
  sentence = sentence.replace(/ln/g, "y");
  sentence = sentence.replace(/lp/g, "\u00e4");
  sentence = sentence.replace(/mn/g, "\u00ff");
  sentence = sentence.replace(/mr/g, "d");
  sentence = sentence.replace(/ms/g, "e");
  sentence = sentence.replace(/nl/g, "y");
  sentence = sentence.replace(/nr/g, "e");
  sentence = sentence.replace(/ph/g, "\u00ff");
  sentence = sentence.replace(/pr/g, "h");
  sentence = sentence.replace(/ps/g, "k");
  sentence = sentence.replace(/pt/g, "l");
  sentence = sentence.replace(/rm/g, "d");
  sentence = sentence.replace(/rn/g, "e");
  sentence = sentence.replace(/rs/g, "l");
  sentence = sentence.replace(/rt/g, "m");
  sentence = sentence.replace(/sh/g, "\u00e4");
  sentence = sentence.replace(/sk/g, "b");
  sentence = sentence.replace(/sl/g, "d");
  sentence = sentence.replace(/sm/g, "e");
  sentence = sentence.replace(/sn/g, "\u00eb");
  sentence = sentence.replace(/sp/g, "k");
  sentence = sentence.replace(/st/g, "n");
  sentence = sentence.replace(/th/g, "b");
  sentence = sentence.replace(/tr/g, "m");
  sentence = sentence.replace(/ts/g, "n");
  sentence = sentence.replace(/ a/g, " ta");
  sentence = sentence.replace(/ \u00e4/g, " r\u00e4");
  sentence = sentence.replace(/ e/g, " ne");
  sentence = sentence.replace(/ \u00eb/g, " l\u00eb");
  sentence = sentence.replace(/ o/g, " ho");
  sentence = sentence.replace(/ \u00f6/g, " d\u00f6");
  sentence = sentence.replace(/ u/g, " du");
  sentence = sentence.replace(/ \u00fc/g, " h\u00fc");
  sentence = sentence.replace(/ y/g, " ly");
  sentence = sentence.replace(/ \u00ff/g, " n\u00ff");
  sentence = sentence.replace(/a /g, "av ");
  sentence = sentence.replace(/\u00e4 /g, "\u00e4t ");
  sentence = sentence.replace(/e /g, "es ");
  sentence = sentence.replace(/\u00eb /g, "\u00ebr ");
  sentence = sentence.replace(/o /g, "op ");
  sentence = sentence.replace(/\u00f6 /g, "\u00f6n ");
  sentence = sentence.replace(/u /g, "um ");
  sentence = sentence.replace(/\u00fc /g, "\u00fcl ");
  sentence = sentence.replace(/y /g, "yk ");
  sentence = sentence.replace(/\u00ff /g, "\u00ffh ");
  sentence = sentence.replace(/bb/g, "abb");
  sentence = sentence.replace(/dd/g, "edd");
  sentence = sentence.replace(/gg/g, "ogg");
  sentence = sentence.replace(/hh/g, "uhh");
  sentence = sentence.replace(/kk/g, "ykk");
  sentence = sentence.replace(/ll/g, "ull");
  sentence = sentence.replace(/mm/g, "omm");
  sentence = sentence.replace(/nn/g, "enn");
  sentence = sentence.replace(/pp/g, "app");
  sentence = sentence.replace(/rr/g, "err");
  sentence = sentence.replace(/ss/g, "oss");
  sentence = sentence.replace(/tt/g, "utt");
  sentence = sentence.replace(/vv/g, "yvv");
  var new_sentence_split = sentence.split(" ");
  var new_sentence = "";
  for (var i = 0; i < new_sentence_split.length; i++) {
    if (new_sentence_split[i].length < 3) {
      new_sentence += new_sentence_split[i];
    } else {
      new_sentence += new_sentence_split[i] + " ";
    }
  }
  sentence = new_sentence;
  sentence = sentence.replace(/aaa/g, "aa");
  sentence = sentence.replace(/\u00e4\u00e4\u00e4/g, "\u00e4\u00e4");
  sentence = sentence.replace(/bbb/g, "bb");
  sentence = sentence.replace(/ddd/g, "dd");
  sentence = sentence.replace(/eee/g, "ee");
  sentence = sentence.replace(/\u00eb\u00eb\u00eb/g, "\u00eb\u00eb");
  sentence = sentence.replace(/ggg/g, "gg");
  sentence = sentence.replace(/hhh/g, "hh");
  sentence = sentence.replace(/kkk/g, "kk");
  sentence = sentence.replace(/lll/g, "ll");
  sentence = sentence.replace(/mmm/g, "mm");
  sentence = sentence.replace(/nnn/g, "nn");
  sentence = sentence.replace(/ooo/g, "oo");
  sentence = sentence.replace(/\u00f6\u00f6\u00f6/g, "\u00f6\u00f6");
  sentence = sentence.replace(/ppp/g, "pp");
  sentence = sentence.replace(/rrr/g, "rr");
  sentence = sentence.replace(/sss/g, "ss");
  sentence = sentence.replace(/ttt/g, "tt");
  sentence = sentence.replace(/uuu/g, "uu");
  sentence = sentence.replace(/\u00fc\u00fc\u00fc/g, "\u00fc\u00fc");
  sentence = sentence.replace(/vvv/g, "vv");
  sentence = sentence.replace(/yyy/g, "yy");
  sentence = sentence.replace(/\u00ff\u00ff\u00ff/g, "\u00ff\u00ff");
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  return sentence;
}
getAllTextNodes().forEach((node) => {
  const { nodeValue } = node;
  var newValue = translate_text(nodeValue);
  if (tocyrillic) {
    newValue = cyrillic(newValue);
  }
  if (newValue !== nodeValue) {
    node.nodeValue = newValue;
  }
});
var text =
  "Page translation to Liinglish as latin or cyrillic writing systems were successfully completed!";
var result = translate_text(text);
console.log(result);
console.log(cyrillic(result));
