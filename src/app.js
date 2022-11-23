/*thegreatjogger.com
thegreatracoon.com;
ourgreatjogger.com;
ourgreatracoon.com;
thebigjogger.com;
thebigracoon.com;
ourbigjogger.com;
ourbigracoon.com;
*/

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let com = [".com", ".net", ".es"];

const domainName = (p, a, n, c) => {
  for (let i = 0; i < p.length; i++) {
    for (let x = 0; x < a.length; x++) {
      for (let y = 0; y < n.length; y++) {
        for (let w = 0; w < c.length; w++) {
          let domainName = p[i] + a[x] + n[y] + c[w];
          console.log(domainName);
        }
      }
    }
  }
};

domainName(pronoun, adj, noun, com);
