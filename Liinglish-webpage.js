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

function translate_text(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/e/g, "a");
  sentence = sentence.replace(/i/g, "e");
  sentence = sentence.replace(/u/g, "e");
  sentence = sentence.replace(/o/g, "u");
  sentence = sentence.replace(/y/g, "o");
  sentence = sentence.replace(/c/g, "kk");
  sentence = sentence.replace(/j/g, "y");
  sentence = sentence.replace(/q/g, "gg");
  sentence = sentence.replace(/w/g, "vv");
  sentence = sentence.replace(/x/g, "hh");
  sentence = sentence.replace(/z/g, "ss");
  sentence = sentence.replace(/bl/g, "mm");
  sentence = sentence.replace(/br/g, "nn");
  sentence = sentence.replace(/dh/g, "gg");
  sentence = sentence.replace(/dr/g, "kr");
  sentence = sentence.replace(/es/g, "nn");
  sentence = sentence.replace(/fl/g, "vv");
  sentence = sentence.replace(/fr/g, "ff");
  sentence = sentence.replace(/gh/g, "kn");
  sentence = sentence.replace(/gl/g, "bl");
  sentence = sentence.replace(/gr/g, "br");
  sentence = sentence.replace(/nd/g, "sk");
  sentence = sentence.replace(/ng/g, "nk");
  sentence = sentence.replace(/ph/g, "ff");
  sentence = sentence.replace(/pl/g, "gl");
  sentence = sentence.replace(/pr/g, "fr");
  sentence = sentence.replace(/sk/g, "kk");
  sentence = sentence.replace(/sl/g, "ll");
  sentence = sentence.replace(/sm/g, "mm");
  sentence = sentence.replace(/sn/g, "nn");
  sentence = sentence.replace(/sp/g, "pp");
  sentence = sentence.replace(/st/g, "tt");
  sentence = sentence.replace(/th/g, "ss");
  sentence = sentence.replace(/tr/g, "dr");
  sentence = sentence.replace(/ay/g, "aa");
  sentence = sentence.replace(/aa/g, "\u00e4");
  sentence = sentence.replace(/ae/g, "\u00e3");
  sentence = sentence.replace(/ea/g, "\u00f5");
  sentence = sentence.replace(/ei/g, "\u00eb");
  sentence = sentence.replace(/ie/g, "yy");
  sentence = sentence.replace(/io/g, "yy");
  sentence = sentence.replace(/oe/g, "\u00f6");
  sentence = sentence.replace(/oi/g, "oo");
  sentence = sentence.replace(/ou/g, "oo");
  sentence = sentence.replace(/ue/g, "\u00fc");
  sentence = sentence.replace(/uo/g, "uu");
  sentence = sentence.replace(/uy/g, "uu");
  sentence = sentence.replace(/yu/g, "yy");
  sentence = sentence.replace(/ya/g, "yy");
  sentence = sentence.replace(/yi/g, "\u00ff");
  sentence = sentence.replace(/bb/g, "ab");
  sentence = sentence.replace(/dd/g, "ed");
  sentence = sentence.replace(/ff/g, "yf");
  sentence = sentence.replace(/gg/g, "og");
  sentence = sentence.replace(/hh/g, "uh");
  sentence = sentence.replace(/kk/g, "ak");
  sentence = sentence.replace(/ll/g, "el");
  sentence = sentence.replace(/mm/g, "ym");
  sentence = sentence.replace(/nn/g, "on");
  sentence = sentence.replace(/pp/g, "up");
  sentence = sentence.replace(/rr/g, "ar");
  sentence = sentence.replace(/ss/g, "es");
  sentence = sentence.replace(/tt/g, "yt");
  sentence = sentence.replace(/vv/g, "ov");
  sentence = sentence.replace(/ay/g, "aa");
  sentence = sentence.replace(/aa/g, "\u00e4");
  sentence = sentence.replace(/ae/g, "\u00e3");
  sentence = sentence.replace(/ea/g, "\u00f5");
  sentence = sentence.replace(/ei/g, "\u00eb");
  sentence = sentence.replace(/ie/g, "yy");
  sentence = sentence.replace(/io/g, "yy");
  sentence = sentence.replace(/oe/g, "\u00f6");
  sentence = sentence.replace(/oi/g, "oo");
  sentence = sentence.replace(/ou/g, "oo");
  sentence = sentence.replace(/ue/g, "\u00fc");
  sentence = sentence.replace(/uo/g, "uu");
  sentence = sentence.replace(/uy/g, "uu");
  sentence = sentence.replace(/yu/g, "yy");
  sentence = sentence.replace(/ya/g, "yy");
  sentence = sentence.replace(/yi/g, "\u00ff");
  sentence = sentence.replace(/ a/g, " va");
  sentence = sentence.replace(/ \u00e4/g, " t\u00e4");
  sentence = sentence.replace(/ \u00e3/g, " s\u00e3");
  sentence = sentence.replace(/ e/g, " re");
  sentence = sentence.replace(/ \u00eb/g, " p\u00eb");
  sentence = sentence.replace(/ y/g, " ny");
  sentence = sentence.replace(/ \u00ff/g, " m\u00ff");
  sentence = sentence.replace(/ o/g, " lo");
  sentence = sentence.replace(/ \u00f6/g, " k\u00f6");
  sentence = sentence.replace(/ \u00f5/g, " h\u00f5");
  sentence = sentence.replace(/ u/g, " gu");
  sentence = sentence.replace(/ \u00fc/g, " \u00fcf");
  sentence = sentence.replace(/b /g, "v\u00fc ");
  sentence = sentence.replace(/d /g, "bu ");
  sentence = sentence.replace(/f /g, "d\u00f5 ");
  sentence = sentence.replace(/g /g, "f\u00f6 ");
  sentence = sentence.replace(/h /g, "go ");
  sentence = sentence.replace(/k /g, "h\u00ff ");
  sentence = sentence.replace(/l /g, "ky ");
  sentence = sentence.replace(/m /g, "l\u00eb ");
  sentence = sentence.replace(/n /g, "me ");
  sentence = sentence.replace(/p /g, "n\u00e3 ");
  sentence = sentence.replace(/r /g, "p\u00e4 ");
  sentence = sentence.replace(/s /g, "ra ");
  sentence = sentence.replace(/t /g, "s\u00fc ");
  sentence = sentence.replace(/v /g, "tu ");
  sentence = sentence.replace(/ a /g, " av ");
  sentence = sentence.replace(/ \u00e4 /g, " \u00e4t ");
  sentence = sentence.replace(/ \u00e3 /g, " \u00e3s ");
  sentence = sentence.replace(/ b /g, " ba ");
  sentence = sentence.replace(/ d /g, " d\u00e4 ");
  sentence = sentence.replace(/ e /g, " er ");
  sentence = sentence.replace(/ \u00eb /g, " \u00ebp ");
  sentence = sentence.replace(/ f /g, " f\u00e3 ");
  sentence = sentence.replace(/ g /g, " ge ");
  sentence = sentence.replace(/ h /g, " h\u00eb ");
  sentence = sentence.replace(/ y /g, " yn ");
  sentence = sentence.replace(/ \u00ff /g, " \u00ffm ");
  sentence = sentence.replace(/ k /g, " ky ");
  sentence = sentence.replace(/ l /g, " l\u00ff ");
  sentence = sentence.replace(/ m /g, " mo ");
  sentence = sentence.replace(/ n /g, " n\u00f6 ");
  sentence = sentence.replace(/ o /g, " ol ");
  sentence = sentence.replace(/ \u00f6 /g, " \u00f6k ");
  sentence = sentence.replace(/ \u00f5 /g, " \u00f5h ");
  sentence = sentence.replace(/ p /g, " p\u00f5 ");
  sentence = sentence.replace(/ r /g, " ru ");
  sentence = sentence.replace(/ s /g, " s\u00fc ");
  sentence = sentence.replace(/ t /g, " ta ");
  sentence = sentence.replace(/ u /g, " ug ");
  sentence = sentence.replace(/ \u00fc /g, " \u00fcf ");
  sentence = sentence.replace(/ v /g, " v\u00e4 ");
  sentence = sentence.replace(/bbb/g, "b");
  sentence = sentence.replace(/ddd/g, "d");
  sentence = sentence.replace(/fff/g, "f");
  sentence = sentence.replace(/ggg/g, "g");
  sentence = sentence.replace(/hhh/g, "h");
  sentence = sentence.replace(/kkk/g, "k");
  sentence = sentence.replace(/lll/g, "l");
  sentence = sentence.replace(/mmm/g, "m");
  sentence = sentence.replace(/nnn/g, "n");
  sentence = sentence.replace(/ppp/g, "p");
  sentence = sentence.replace(/rrr/g, "r");
  sentence = sentence.replace(/sss/g, "s");
  sentence = sentence.replace(/ttt/g, "t");
  sentence = sentence.replace(/vvv/g, "v");
  sentence = sentence.replace(/aaa/g, "a");
  sentence = sentence.replace(/\u00e4\u00e4\u00e4/g, "\u00e4");
  sentence = sentence.replace(/\u00e3\u00e3\u00e3/g, "\u00e3");
  sentence = sentence.replace(/eee/g, "e");
  sentence = sentence.replace(/\u00eb\u00eb\u00eb/g, "\u00eb");
  sentence = sentence.replace(/ooo/g, "o");
  sentence = sentence.replace(/\u00f6\u00f6\u00f6/g, "\u00f6");
  sentence = sentence.replace(/\u00f5\u00f5\u00f5/g, "\u00f5");
  sentence = sentence.replace(/uuu/g, "u");
  sentence = sentence.replace(/\u00fc\u00fc\u00fc/g, "\u00fc");
  sentence = sentence.replace(/yyy/g, "y");
  sentence = sentence.replace(/\u00ff\u00ff\u00ff/g, "\u00ff");
  return sentence;
}

getAllTextNodes().forEach((node) => {
  const { nodeValue } = node;
  const newValue = translate_text(nodeValue);
  if (newValue !== nodeValue) {
    node.nodeValue = newValue;
  }
});
