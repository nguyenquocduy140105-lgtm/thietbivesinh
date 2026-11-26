document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-navigation');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  // Interactive context selector tabs on index.html
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');
  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab-target');
        tabButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach((panel) => {
          panel.classList.remove('active');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const activePanel = document.querySelector(`[data-tab-panel="${target}"]`);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });
  }

  // Interactive Checklist Progress on checklist-nghiem-thu-thiet-bi.html
  const checkboxes = document.querySelectorAll('.js-check-item');
  const progressCount = document.querySelector('#checklist-count');
  if (checkboxes.length && progressCount) {
    const updateChecklist = () => {
      const checked = Array.from(checkboxes).filter((c) => c.checked).length;
      progressCount.textContent = `Đã kiểm tra: ${checked} / ${checkboxes.length} hạng mục`;
    };
    checkboxes.forEach((box) => box.addEventListener('change', updateChecklist));
    updateChecklist();
  }

  // Copy specification template button
  const copyBtn = document.querySelector('#copy-spec-btn');
  const specTemplate = document.querySelector('#spec-template-text');
  if (copyBtn && specTemplate) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(specTemplate.textContent.trim()).then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Đã sao chép mẫu thông số ✓';
        setTimeout(() => {
          copyBtn.textContent = original;
        }, 2200);
      });
    });
  }
});
