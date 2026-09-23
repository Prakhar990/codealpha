// ============ MOBILE NAV TOGGLE ============
const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");

mobileToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// ============ CERTIFICATE DATABASE ============
// In a real site this would be a backend lookup. Add or edit entries here —
// key is the Certificate ID exactly as issued (case-insensitive on lookup).
const certificateDB = {
  "CA/DF1/225278": {
    name: "Aryan Kumar",
    domain: "Frontend Development",
    startDate: "1 August 2026",
    endDate: "30 August 2026"
  },
  "CA/DF1/24618": {
    name: "Suraj Kumar",
    domain: "Frontend Development",
    startDate: "10 August 2026",
    endDate: "20 September 2026"
  },
  "CA/DF1/239786": {
    name: "Anshu Kumar",
    domain: "Frontend Development",
    startDate: "10 August 2026",
    endDate: "20 September 2026"
  },
  "CA/DF1/239931": {
    name: "Prakhar Pandey",
    domain: "Python Programming",
    startDate: "10 August 2026",
    endDate: "10 September 2026"
  },
  "CA/DF1/244608": {
    name: "Om Prakash Gupta",
    domain: "Frontend Development",
    startDate: "20 August 2026",
    endDate: "20 September 2026"
  },
  "CA/DF1/239776": {
    name: "Priyeshraj",
    domain: "Frontend Development",
    startDate: "10 August 2026",
    endDate: "10 September 2026"
  },
  "CA/DF1/170707": {
    name: "Aditi Dubey",
    domain: "Python Programming",
    startDate: "10 August 2026",
    endDate: "10 September 2026"
  },
  "CA/DF1/244718": {
    name: "Suraj Kumar",
    domain: "Frontend Development",
    startDate: "10 August 2026",
    endDate: "20 September 2026"
  },
  "CA/DF1/239942": {
    name: "Devesh Tiwari",
    domain: "Frontend Development",
    startDate: "10 August 2026",
    endDate: "10 September 2026"
  },
  "CA/DF1/239782": {
    name: "Kamlesh Kumar",
    domain: "Frontend Development",
    startDate: "05 June 2026",
    endDate: "05 July 2026"
  },
  "CA/DF1/255061": {
    name: "Abhijeet Kumar",
    domain: "Frontend Development",
    startDate: "21 August 2026",
    endDate: "20 September 2026"
  },
  

  
  
};

// Normalize an entered ID so "ca/df1/225278", "CA / DF1 / 225278", etc.
// all match the same DB key.
function normalizeId(raw) {
  return raw.trim().toUpperCase().replace(/\s+/g, "");
}

// Build a lookup table keyed by normalized ID once, so entries above can be
// written in a natural, readable format.
const normalizedDB = Object.fromEntries(
  Object.entries(certificateDB).map(([id, record]) => [normalizeId(id), { id, ...record }])
);

// ============ ICONS ============
const icons = {
  person: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#2f6fed" stroke-width="1.8"/><path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" stroke="#2f6fed" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  medal: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="5" stroke="#2f6fed" stroke-width="1.8"/><path d="M9 13 L7 21 L12 18.5 L17 21 L15 13" stroke="#2f6fed" stroke-width="1.8" stroke-linejoin="round" fill="none"/></svg>`,
  calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="#2f6fed" stroke-width="1.8"/><path d="M4 9.5 H20 M8 3 V6 M16 3 V6" stroke="#2f6fed" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  lock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="#2f6fed" stroke-width="1.8"/><path d="M8 10.5 V8 a4 4 0 0 1 8 0 v2.5" stroke="#2f6fed" stroke-width="1.8"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#1fae64" stroke-width="1.8"/><path d="M8 12.5 L11 15.5 L16 9.5" stroke="#1fae64" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  share: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="2.6" stroke="#fff" stroke-width="1.8"/><circle cx="18" cy="6" r="2.6" stroke="#fff" stroke-width="1.8"/><circle cx="18" cy="18" r="2.6" stroke="#fff" stroke-width="1.8"/><path d="M8.3 10.8 L15.7 7.2 M8.3 13.2 L15.7 16.8" stroke="#fff" stroke-width="1.8"/></svg>`,
  document: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 3 H15 L19 7 V21 H7 Z" stroke="#1fae64" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 12.5 L11.5 14.5 L15 10" stroke="#1fae64" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  crossCircle: `<svg width="46" height="46" viewBox="0 0 24 24" fill="none"><path d="M8 8 L16 16 M16 8 L8 16" stroke="#e1453c" stroke-width="2" stroke-linecap="round"/></svg>`,
  checkBig: `<svg width="46" height="46" viewBox="0 0 24 24" fill="none"><path d="M6 12.5 L10 16.5 L18 7.5" stroke="#1fae64" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

// ============ CONFETTI ============
// Scatters small colored dots around the status circle that drift outward
// and fade. Purely decorative; disabled automatically under
// prefers-reduced-motion via CSS.
function confettiDotsHTML(count = 14) {
  const colors = ["#4aa8ff", "#7b6bf0", "#ffb020", "#ff6b8a", "#2ecc71", "#f76fb0", "#34d0d8"];
  let html = "";
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 55 + Math.random() * 25;
    const ox = Math.cos(angle) * radius;
    const oy = Math.sin(angle) * radius;
    const dx = (Math.random() - 0.5) * 30;
    const delay = (Math.random() * 0.35).toFixed(2);
    const color = colors[i % colors.length];
    html += `<span class="confetti-dot" style="--ox:${ox.toFixed(1)}px; --oy:${oy.toFixed(1)}px; --dx:${dx.toFixed(1)}px; --delay:${delay}s; background:${color};"></span>`;
  }
  return html;
}

// ============ RESULT PANEL RENDERERS ============
function renderSuccessPanel(record) {
  return `
    <div class="status-wrap">
      ${confettiDotsHTML()}
      <div class="status-circle is-success">${icons.checkBig}</div>
    </div>

    <h2 class="result-heading is-success">Verification Successful!</h2>
    <p class="result-desc">
      This certificate has been successfully verified and is recognized as an
      officially issued internship credential by CodeAlpha.
    </p>

    <div class="badge-pill is-success">${icons.medal} OFFICIAL &amp; VALID &bull; INTERNSHIP CERTIFICATE</div>

    <div class="info-card">
      <div class="info-icon">${icons.person}</div>
      <div class="info-text">
        <span class="info-label">Candidate Name</span>
        <span class="info-value">${record.name}</span>
      </div>
    </div>

    <div class="info-card">
      <div class="info-icon">${icons.medal}</div>
      <div class="info-text">
        <span class="info-label">Internship Domain</span>
        <span class="info-value">${record.domain}</span>
      </div>
    </div>

    <div class="info-row">
      <div class="info-card">
        <div class="info-icon">${icons.calendar}</div>
        <div class="info-text">
          <span class="info-label">Start Date</span>
          <span class="info-value">${record.startDate}</span>
        </div>
      </div>
      <div class="info-card">
        <div class="info-icon">${icons.calendar}</div>
        <div class="info-text">
          <span class="info-label">End Date</span>
          <span class="info-value">${record.endDate}</span>
        </div>
      </div>
    </div>

    <div class="info-card">
      <div class="info-icon is-locked">${icons.lock}</div>
      <div class="info-text">
        <span class="info-label">Student ID</span>
        <span class="info-value mono">${record.id}</span>
      </div>
    </div>

    <div class="info-card">
      <div class="info-icon is-status">${icons.check}</div>
      <div class="info-text">
        <span class="info-label">Certificate Status</span>
        <span class="info-value is-verified">Verified &amp; Authentic</span>
      </div>
    </div>

    <button type="button" class="share-btn" id="shareBtn">${icons.share} Share Verified Achievement</button>

    <hr class="result-divider" />

    <p class="directory-note">${icons.document} CodeAlpha Secured Certification Directory</p>
    <a href="#" class="retry-link" id="retryLink">Verify another certificate</a>
  `;
}

function renderErrorPanel(enteredId) {
  return `
    <div class="status-wrap">
      <div class="status-circle is-error">${icons.crossCircle}</div>
    </div>

    <h2 class="result-heading is-error">Certificate Not Found</h2>
    <p class="result-desc">
      We couldn't find a certificate matching <strong>${enteredId}</strong>.
      Please double-check the ID and try again.
    </p>

    <div class="badge-pill is-error">${icons.crossCircle.replace('width="46" height="46"', 'width="16" height="16"')} NOT FOUND IN OUR RECORDS</div>

    <a href="#" class="retry-link" id="retryLink">Try a different Certificate ID</a>
  `;
}

// ============ VERIFY CERTIFICATE FORM ============
const verifyForm = document.getElementById("verifyForm");
const certInput = document.getElementById("certId");
const resultBox = document.getElementById("resultBox");
const resultPanel = document.getElementById("resultPanel");

function resetResult() {
  resultBox.hidden = true;
  resultPanel.hidden = true;
  resultPanel.className = "result-panel";
  resultPanel.innerHTML = "";
}

verifyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const enteredId = certInput.value.trim();
  const normalized = normalizeId(enteredId);

  resetResult();

  if (!normalized) {
    resultBox.hidden = false;
    resultBox.className = "result-box empty";
    resultBox.textContent = "Please enter a Certificate ID to verify.";
    return;
  }

  const record = normalizedDB[normalized];

  resultPanel.hidden = false;

  if (record) {
    resultPanel.classList.add("success-state");
    resultPanel.innerHTML = renderSuccessPanel(record);
  } else {
    resultPanel.classList.add("error-state");
    resultPanel.innerHTML = renderErrorPanel(enteredId);
  }

  resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });

  // "Share" button — demo action, a real build would open a native share
  // sheet or copy a public verification link.
  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      const url = `${location.origin}${location.pathname}#/verification?id=${encodeURIComponent(record.id)}`;
      if (navigator.share) {
        navigator.share({ title: "CodeAlpha Verified Certificate", url }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        alert("Verification link copied to clipboard.");
      }
    });
  }

  // "Verify another certificate" — clears the result and refocuses the input.
  const retryLink = document.getElementById("retryLink");
  if (retryLink) {
    retryLink.addEventListener("click", (evt) => {
      evt.preventDefault();
      resetResult();
      certInput.value = "";
      certInput.focus();
    });
  }
});

certInput.addEventListener("input", resetResult);

// ============ NEWSLETTER FORM ============
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector("input");
  const email = emailInput.value.trim();

  if (email) {
    alert(`Thanks for subscribing! We'll send updates to ${email}.`);
    emailInput.value = "";
  }
});

// ============ FOOTER YEAR ============
document.getElementById("year").textContent = new Date().getFullYear();