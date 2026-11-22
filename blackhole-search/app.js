const platforms = [
  {name:"Instagram",host:"instagram.com",hint:"Public profiles and posts"},
  {name:"TikTok",host:"tiktok.com",hint:"Creators and public videos"},
  {name:"Facebook",host:"facebook.com",hint:"Public pages and profiles"},
  {name:"X",host:"x.com",hint:"Public posts and accounts"},
  {name:"LinkedIn",host:"linkedin.com",hint:"Professional profiles"},
  {name:"YouTube",host:"youtube.com",hint:"Channels and public videos"},
  {name:"Reddit",host:"reddit.com",hint:"Public profiles and posts"},
  {name:"Pinterest",host:"pinterest.com",hint:"Public profiles and boards"},
  {name:"Twitch",host:"twitch.tv",hint:"Public streamer channels"},
  {name:"GitHub",host:"github.com",hint:"Public developer profiles"}
];

const form = document.querySelector("#search-form");
const input = document.querySelector("#person-name");
const results = document.querySelector("#results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value.trim().replace(/\s+/g, " ");
  if (!name) return;
  const encoded = encodeURIComponent('"' + name + '"');
  const cards = platforms.map(p => {
    const url = `https://www.google.com/search?q=${encodeURIComponent('site:' + p.host + ' "' + name + '"')}`;
    return `<a class="platform" href="${url}" target="_blank" rel="noopener noreferrer">
      <span><strong>${p.name}</strong><small>${p.hint}</small></span><span class="arrow">↗</span>
    </a>`;
  }).join("");
  results.innerHTML = `
    <div class="result-head"><div><h2>Search paths for “${escapeHTML(name)}”</h2><p>Open a platform search to review public results.</p></div><span class="tag">10 PLATFORMS</span></div>
    <div class="notice"><b>Important:</b> These are public search links, not confirmed matches. A shared name can refer to different people. Check each result carefully and don't assume profiles belong to the same person. This tool does not scrape accounts, access private content, or compile sensitive personal details.</div>
    <div class="platforms">${cards}</div>`;
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
