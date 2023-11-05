function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const letters = {};

  for (const ch of s) {
    letters[ch] = letters[ch] ?? 0;
    letters[ch]++;
  }

  for (const ch of t) {
    if (letters[ch]) {
      letters[ch]--;
    } else {
      return false;
    }
  }

  for (const key in letters) {
    if (letters[key] !== 0) return false;
  }

  return true;
}

const groupAnagrams = (strs) => {
  //TC(NKlogK), N is the length of strs, and K is the maximum length of a atring in strs, the outer loop has complexity O(N)
  //SC: O(NK)
  const ans = {};
  const ret = [];

  let i = 0;
  for (const str of strs) {
    const word = str.split("").sort().join("");

    ans[word] = ans[word] ?? [];
    ans[word].push(strs[i]);

    i++;
  }

  return Object.values(ans);
};

const groupAnagramsFaster = (strs) => {
  const ans = {};

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (const ch of str) {
      count[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    const key = count.toString();

    ans[key] = ans[key] ?? [];
    ans[key].push(str);
  }

  return Object.values(ans);
};
