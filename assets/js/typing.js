/* === 打字机效果 · 轮播温柔的一句话 ===
   想改文案就改下面的 PHRASES 数组 🌸
*/
(() => {
  const PHRASES = [
    '欢迎来到我的小世界 🌸',
    '复旦计科 · 科研新手 💻',
    '在记忆里种花的人 🌷',
    '相信热爱可抵岁月漫长 ✨',
  ];

  const TYPE_SPEED = 110;   // 每字符 ms
  const ERASE_SPEED = 55;
  const HOLD_AFTER = 1600;  // 打完一句停顿 ms
  const HOLD_BEFORE = 500;  // 擦完等多久再换下一句

  const target = document.querySelector('.hero__typing-text');
  if (!target) return;

  let phraseIdx = 0;
  let charIdx = 0;
  let phase = 'typing';  // typing | holding | erasing | waiting

  function tick() {
    const phrase = PHRASES[phraseIdx];

    if (phase === 'typing') {
      charIdx++;
      target.textContent = phrase.slice(0, charIdx);
      if (charIdx >= phrase.length) {
        phase = 'holding';
        setTimeout(tick, HOLD_AFTER);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else if (phase === 'holding') {
      phase = 'erasing';
      setTimeout(tick, ERASE_SPEED);
    } else if (phase === 'erasing') {
      charIdx--;
      target.textContent = phrase.slice(0, charIdx);
      if (charIdx <= 0) {
        phase = 'waiting';
        phraseIdx = (phraseIdx + 1) % PHRASES.length;
        setTimeout(tick, HOLD_BEFORE);
        return;
      }
      setTimeout(tick, ERASE_SPEED);
    } else {
      phase = 'typing';
      setTimeout(tick, TYPE_SPEED);
    }
  }

  tick();
})();
