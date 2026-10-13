(() => {
  "use strict";
  const records = [
    {id:"lp-001",title:"Frontend Development Intern",company:"Pixel & Co.",domain:"Web Development",mode:"Remote",duration:"8 weeks",stipend:"₹8,000 / month",location:"India · Remote",level:"Beginner",logo:"P",tone:"purple",description:"Help shape clean, accessible interfaces and turn thoughtful designs into responsive web experiences. You will work with a small product team and receive regular feedback.",skills:["HTML","CSS","JavaScript","Responsive design"],responsibilities:["Build reusable UI components","Test layouts across screen sizes","Collaborate on usability improvements"]},
    {id:"lp-002",title:"Python Developer Intern",company:"Northstar Labs",domain:"Software Development",mode:"Hybrid",duration:"12 weeks",stipend:"₹10,000 / month",location:"Kochi, Kerala",level:"Beginner",logo:"N",tone:"green",description:"Contribute to Python-based tools and services while learning good engineering practices from experienced developers.",skills:["Python","Git","REST APIs","Problem solving"],responsibilities:["Implement small backend features","Write readable and tested code","Document technical decisions"]},
    {id:"lp-003",title:"Data Analytics Intern",company:"MetricMint",domain:"Data & Analytics",mode:"Remote",duration:"10 weeks",stipend:"₹7,500 / month",location:"India · Remote",level:"Beginner",logo:"M",tone:"orange",description:"Turn raw data into clear findings. Help prepare datasets, explore trends, and communicate insights through visual reports.",skills:["Excel","SQL","Python basics","Data visualization"],responsibilities:["Clean and validate sample datasets","Prepare charts and summary reports","Explain trends in plain language"]},
    {id:"lp-004",title:"UI/UX Design Intern",company:"Mellow Studio",domain:"Design",mode:"Remote",duration:"8 weeks",stipend:"Certificate + mentorship",location:"India · Remote",level:"Beginner",logo:"M",tone:"pink",description:"Support user-centred design work, from early sketches to polished prototypes. Build a process-focused portfolio with feedback.",skills:["Figma","Wireframing","Prototyping","Accessibility"],responsibilities:["Create user flows and wireframes","Build interactive prototypes","Record design decisions and feedback"]},
    {id:"lp-005",title:"Full Stack Developer Intern",company:"Brightpath Digital",domain:"Web Development",mode:"On-site",duration:"12 weeks",stipend:"₹12,000 / month",location:"Thiruvananthapuram, Kerala",level:"Beginner",logo:"B",tone:"blue",description:"Learn how modern web products are built end to end by contributing to frontend features, API integration, and practical testing.",skills:["JavaScript","React basics","Node.js","Git"],responsibilities:["Develop responsive pages","Connect UI to REST endpoints","Test and document features"]},
    {id:"lp-006",title:"Machine Learning Intern",company:"Orbit AI Works",domain:"AI & Machine Learning",mode:"Hybrid",duration:"10 weeks",stipend:"₹9,000 / month",location:"Bengaluru, Karnataka",level:"Beginner",logo:"O",tone:"yellow",description:"Explore practical machine-learning workflows with a guided team. Work with sample datasets and learn to evaluate model results.",skills:["Python","Pandas","Scikit-learn basics","Statistics"],responsibilities:["Prepare datasets for experiments","Compare baseline model metrics","Summarize findings and limitations"]},
    {id:"lp-007",title:"QA & Testing Intern",company:"Clearcheck Systems",domain:"Software Development",mode:"Hybrid",duration:"6 weeks",stipend:"₹6,000 / month",location:"Kochi, Kerala",level:"Beginner",logo:"C",tone:"green",description:"Help make digital products more reliable by exploring user flows, documenting defects, and learning structured testing techniques.",skills:["Test cases","Bug reporting","Web basics","Attention to detail"],responsibilities:["Write clear manual test cases","Reproduce and document issues","Retest fixes across browsers"]},
    {id:"lp-008",title:"Content & SEO Intern",company:"Goodword Media",domain:"Marketing",mode:"Remote",duration:"8 weeks",stipend:"₹5,000 / month",location:"India · Remote",level:"Beginner",logo:"G",tone:"pink",description:"Learn how useful content reaches the right audience through search. Support topic research, content planning, and basic performance reviews.",skills:["Writing","Keyword research","SEO basics","Analytics"],responsibilities:["Research topics and search intent","Assist with content briefs","Review basic traffic metrics"]},
    {id:"lp-009",title:"Cloud Support Intern",company:"Skyframe Tech",domain:"Cloud & IT",mode:"On-site",duration:"12 weeks",stipend:"₹8,500 / month",location:"Chennai, Tamil Nadu",level:"Beginner",logo:"S",tone:"blue",description:"Build foundational cloud and support skills by helping document common issues, test simple deployments, and follow operational checklists.",skills:["Linux basics","Networking","Cloud concepts","Documentation"],responsibilities:["Maintain setup guides","Assist with deployment checks","Track and categorize support issues"]}
  ];
  const $ = (selector) => document.querySelector(selector);
  const grid = $("#internship-grid"), search = $("#search-input"), domain = $("#domain-filter"), mode = $("#mode-filter");
  const count = $("#results-count"), summary = $("#filter-summary"), empty = $("#empty-state"), error = $("#error-state"), status = $("#status-message");
  const dialog = $("#details-dialog"), dialogContent = $("#dialog-content");
  const saved = new Set();
  const tones = ["purple","green","orange","pink","blue","yellow"];
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const unique = values => [...new Set(values)].sort((a,b) => a.localeCompare(b));

  function populateDomains() {
    unique(records.map(item => item.domain)).forEach(value => {
      const option = document.createElement("option");
      option.value = value; option.textContent = value; domain.append(option);
    });
  }
  function getFilteredRecords() {
    const term = search.value.trim().toLocaleLowerCase();
    return records.filter(item => {
      const haystack = [item.title,item.company,item.domain,item.location,...item.skills].join(" ").toLocaleLowerCase();
      return (!term || haystack.includes(term)) && (domain.value === "all" || item.domain === domain.value) && (mode.value === "all" || item.mode === mode.value);
    });
  }
  function cardTemplate(item, index) {
    const isSaved = saved.has(item.id);
    return `<article class="internship-card">
      <div class="card-topline"><div class="company-logo ${tones.includes(item.tone)?item.tone:tones[index%tones.length]}" aria-hidden="true">${escapeHtml(item.logo)}</div>
      <button class="save-button" type="button" data-save="${escapeHtml(item.id)}" aria-label="${isSaved?"Remove saved role":"Save role"}: ${escapeHtml(item.title)}" aria-pressed="${isSaved}">${isSaved?"♥":"♡"}</button></div>
      <span class="domain-chip">${escapeHtml(item.domain)}</span><h3 class="card-title">${escapeHtml(item.title)}</h3><p class="company-name">${escapeHtml(item.company)}</p>
      <div class="card-meta"><span aria-label="Duration">◷ ${escapeHtml(item.duration)}</span><span aria-label="Location">⌖ ${escapeHtml(item.location)}</span></div>
      <div class="card-bottom"><span class="work-pill">${escapeHtml(item.mode)}</span><button class="details-button" type="button" data-details="${escapeHtml(item.id)}">View details <span aria-hidden="true">→</span></button></div>
    </article>`;
  }
  function render() {
    error.hidden = true; status.hidden = true;
    const filtered = getFilteredRecords();
    grid.innerHTML = filtered.map(cardTemplate).join("");
    grid.hidden = filtered.length === 0; empty.hidden = filtered.length !== 0;
    count.textContent = `${filtered.length} ${filtered.length === 1 ? "opportunity" : "opportunities"}`;
    const filters = [];
    if (search.value.trim()) filters.push(`keyword “${search.value.trim()}”`);
    if (domain.value !== "all") filters.push(domain.value);
    if (mode.value !== "all") filters.push(mode.value);
    summary.textContent = filters.length ? `Filtered by ${filters.join(" · ")}.` : "Showing all available opportunities.";
  }
  function resetFilters() { search.value = ""; domain.value = "all"; mode.value = "all"; render(); search.focus(); }
  function showDetails(id) {
    const item = records.find(record => record.id === id);
    if (!item) { showError("That opportunity could not be found. Please refresh the board."); return; }
    dialogContent.innerHTML = `<div class="dialog-company"><div class="company-logo ${escapeHtml(item.tone)}" aria-hidden="true">${escapeHtml(item.logo)}</div><div><h2 id="dialog-title">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.company)}</p></div></div>
      <div class="dialog-tags"><span>${escapeHtml(item.domain)}</span><span>${escapeHtml(item.mode)}</span><span>${escapeHtml(item.duration)}</span></div>
      <p class="dialog-description">${escapeHtml(item.description)}</p><h3 class="dialog-section-title">What you’ll work on</h3><ul>${item.responsibilities.map(task=>`<li>${escapeHtml(task)}</li>`).join("")}</ul>
      <h3 class="dialog-section-title">Skills to explore</h3><div class="skill-list">${item.skills.map(skill=>`<span>${escapeHtml(skill)}</span>`).join("")}</div>
      <p class="dialog-note">Indicative stipend: ${escapeHtml(item.stipend)}. This is a fictional demonstration listing; verify details with the employer before applying.</p>`;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else { dialog.setAttribute("open",""); $("#dialog-close").focus(); }
  }
  function showError(message) {
    grid.hidden = true; empty.hidden = true; error.hidden = false;
    status.textContent = message; status.hidden = false;
  }
  $("#filter-form").addEventListener("submit", event => { event.preventDefault(); render(); });
  search.addEventListener("input", render); domain.addEventListener("change", render); mode.addEventListener("change", render);
  $("#filter-form").addEventListener("reset", event => { event.preventDefault(); resetFilters(); });
  $("#empty-reset").addEventListener("click", resetFilters);
  $("#retry-button").addEventListener("click", () => { try { populateDomains(); render(); } catch (e) { showError("The board could not be rendered. Please reload the page."); } });
  $("#dialog-close").addEventListener("click", () => dialog.close ? dialog.close() : dialog.removeAttribute("open"));
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && dialog.open) dialog.close(); });
  grid.addEventListener("click", event => {
    const saveButton = event.target.closest("[data-save]");
    const detailButton = event.target.closest("[data-details]");
    if (saveButton) {
      const id = saveButton.dataset.save;
      if (saved.has(id)) saved.delete(id); else saved.add(id);
      render();
      const updated = grid.querySelector(`[data-save="${CSS.escape(id)}"]`);
      if (updated) updated.focus();
    } else if (detailButton) showDetails(detailButton.dataset.details);
  });
  try { populateDomains(); render(); }
  catch (error) { showError("The board could not be initialized. Please reload the page."); }
})();