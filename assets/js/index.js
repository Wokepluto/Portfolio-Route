var state = {
  currentCarouselIndex: 0,
  carouselInterval: null,
  isSettingsSidebarOpen: false,
  currentTheme: localStorage.getItem('theme') || 'light',
  currentFont: localStorage.getItem('font') || 'tajawal',
  currentColor: localStorage.getItem('color') || 'indigo',
};

var config = {
  carouselAutoplayDelay: 5000,
  scrollToHeader: 100,
  navbarOffset: 100,
  colors: [
    {
      name: 'indigo',
      primary: '#6366f1',
      secondary: '#a855f7',
      accent: '#ec4899',
    },
    {
      name: 'blue',
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#8b5cf6',
    },
    {
      name: 'green',
      primary: '#10b981',
      secondary: '#14b8a6',
      accent: '#06b6d4',
    },
    {
      name: 'orange',
      primary: '#f97316',
      secondary: '#f59e0b',
      accent: '#eab308',
    },
    {
      name: 'pink',
      primary: '#ec4899',
      secondary: '#f472b6',
      accent: '#a855f7',
    },
    {
      name: 'purple',
      primary: '#8b5cf6',
      secondary: '#a855f7',
      accent: '#d946ef',
    },
    {
      name: 'red',
      primary: '#ef4444',
      secondary: '#f97316',
      accent: '#f59e0b',
    },
    {
      name: 'teal',
      primary: '#14b8a6',
      secondary: '#06b6d4',
      accent: '#3b82f6',
    },
  ],
};

function activeNavigation() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    var current = '';
    var scrollPosition = window.pageYOffset;

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionTop = section.offsetTop - config.navbarOffset;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = sectionId;
      }
    }

    for (var n = 0; n < navLinks.length; n++) {
      var link = navLinks[n];

      link.classList.remove('text-primary', 'active');
      link.classList.add('text-slate-600', 'dark:text-slate-300');

      var href = link.getAttribute('href');

      if (href === `#${current}`) {
        link.classList.add('text-primary', 'active');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      }
    }
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
}

function themeToggle() {
  var themeToggleBtn = document.getElementById('theme-toggle-button');
  var html = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      themeToggleBtn.setAttribute('aria-pressed', 'true');
    } else {
      html.classList.remove('dark');
      themeToggleBtn.setAttribute('aria-pressed', 'false');
    }
    state.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }

  applyTheme(state.currentTheme);

  themeToggleBtn.addEventListener('click', function () {
    var newTheme;

    if (state.currentTheme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }

    applyTheme(newTheme);
  });
}

function mobileMenu() {
  var headerElement = document.querySelector('#header');
  if (!headerElement) {
    return;
  }

  var navLinksElement = document.querySelector('.nav-links');
  if (!navLinksElement) {
    return;
  }

  var mobileMenuButton = document.createElement('button');

  mobileMenuButton.className =
    'mobile-menu-btn lg:hidden text-slate-900 dark:text-white text-2xl focus:outline-none';

  mobileMenuButton.setAttribute('aria-label', 'فتح القائمة');

  mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

  var headerContainer = headerElement.querySelector('.container');
  headerContainer.appendChild(mobileMenuButton);

  mobileMenuButton.addEventListener('click', function () {
    navLinksElement.classList.toggle('active');

    var iconElement = mobileMenuButton.querySelector('i');

    if (navLinksElement.classList.contains('active')) {
      iconElement.className = 'fa-solid fa-times';
      mobileMenuButton.setAttribute('aria-label', 'إغلاق القائمة');
    } else {
      iconElement.className = 'fa-solid fa-bars';
      mobileMenuButton.setAttribute('aria-label', 'فتح القائمة');
    }
  });

  var navLinks = navLinksElement.querySelectorAll('a');

  for (var index = 0; index < navLinks.length; index++) {
    navLinks[index].addEventListener('click', function () {
      navLinksElement.classList.remove('active');

      var iconElement = mobileMenuButton.querySelector('i');
      iconElement.className = 'fa-solid fa-bars';

      mobileMenuButton.setAttribute('aria-label', 'فتح القائمة');
    });
  }
}

function tabsFilters() {
  var filterButtons = document.querySelectorAll('.portfolio-filter');
  var portfolioItems = document.querySelectorAll('.portfolio-item');

  for (let i = 0; i < filterButtons.length; i++) {
    let button = filterButtons[i];

    button.addEventListener('click', function () {
      let filter = button.getAttribute('data-filter');

      for (let f = 0; f < filterButtons.length; f++) {
        let btn = filterButtons[f];

        btn.classList.remove(
          'bg-linear-to-r',
          'from-primary',
          'to-secondary',
          'text-white',
          'shadow-lg',
          'shadow-primary/50'
        );

        btn.classList.add(
          'bg-white',
          'dark:bg-slate-800',
          'text-slate-600',
          'dark:text-slate-300',
          'border',
          'border-slate-300',
          'dark:border-slate-700'
        );

        btn.setAttribute('aria-pressed', 'false');
      }

      button.classList.add(
        'bg-linear-to-r',
        'from-primary',
        'to-secondary',
        'text-white',
        'shadow-lg',
        'shadow-primary/50'
      );

      button.classList.remove(
        'bg-white',
        'dark:bg-slate-800',
        'text-slate-600',
        'dark:text-slate-300',
        'border',
        'border-slate-300',
        'dark:border-slate-700'
      );

      button.setAttribute('aria-pressed', 'true');

      for (let k = 0; k < portfolioItems.length; k++) {
        let item = portfolioItems[k];
        let category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(function () {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(function () {
            item.style.display = 'none';
          }, 300);
        }
      }
    });
  }

  for (let i = 0; i < portfolioItems.length; i++) {
    let item = portfolioItems[i];
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }
}

function settingsSidebar() {
  var settingsToggle = document.getElementById('settings-toggle');
  var settingsSidebar = document.getElementById('settings-sidebar');
  var closeSettings = document.getElementById('close-settings');
  var resetSettings = document.getElementById('reset-settings');

  function toggleSidebar() {
    state.isSettingsSidebarOpen = !state.isSettingsSidebarOpen;

    if (state.isSettingsSidebarOpen) {
      settingsSidebar.classList.remove('translate-x-full');
      settingsToggle.style.transform = 'translate(-665%, -50%)';
      settingsToggle.setAttribute('aria-expanded', 'true');
      settingsSidebar.setAttribute('aria-hidden', 'false');
    } else {
      settingsSidebar.classList.add('translate-x-full');
      settingsToggle.style.transform = 'translate(0%, -50%)';
      settingsToggle.setAttribute('aria-expanded', 'false');
      settingsSidebar.setAttribute('aria-hidden', 'true');
    }
  }

  settingsToggle.addEventListener('click', toggleSidebar);
  closeSettings.addEventListener('click', toggleSidebar);

  document.addEventListener('click', function (e) {
    if (
      state.isSettingsSidebarOpen &&
      !settingsSidebar.contains(e.target) &&
      !settingsToggle.contains(e.target)
    ) {
      toggleSidebar();
    }
  });

  var fontOptions = document.querySelectorAll('.font-option');

  function applyFont(font) {
    document.body.className = document.body.className.replace(/font-\w+/g, '');
    document.body.classList.add(`font-${font}`);

    for (var i = 0; i < fontOptions.length; i++) {
      var option = fontOptions[i];
      var optionFont = option.getAttribute('data-font');

      if (optionFont === font) {
        option.classList.add('active');
        option.classList.add('border-primary');
        option.classList.add('bg-slate-50');
        option.classList.add('dark:bg-slate-800/50');

        option.setAttribute('aria-checked', 'true');
      } else {
        option.classList.remove('active');
        option.classList.remove('border-primary');
        option.classList.remove('bg-slate-50');
        option.classList.remove('dark:bg-slate-800/50');

        option.setAttribute('aria-checked', 'false');
      }
    }

    state.currentFont = font;
    localStorage.setItem('font', font);
  }

  for (var i = 0; i < fontOptions.length; i++) {
    var option = fontOptions[i];

    option.addEventListener('click', function () {
      var font = this.getAttribute('data-font');

      applyFont(font);
    });
  }

  var colorsGrid = document.getElementById('theme-colors-grid');

  function createColorOptions() {
    colorsGrid.innerHTML = '';

    for (var i = 0; i < config.colors.length; i++) {
      var color = config.colors[i];

      var button = document.createElement('button');

      button.className =
        'color-option w-full aspect-square rounded-xl transition-all hover:scale-110 group';

      button.style.background =
        'linear-gradient(135deg, ' +
        color.primary +
        ' 0%, ' +
        color.secondary +
        ' 50%, ' +
        color.accent +
        ' 100%)';

      button.setAttribute('data-color', color.name);
      button.setAttribute('type', 'button');
      button.setAttribute('aria-label', 'اختيار لون ' + color.name);

      var checkIcon = document.createElement('div');
      checkIcon.className =
        'flex items-center justify-center opacity-0 group-[.active]:opacity-100 transition-opacity';
      checkIcon.innerHTML =
        '<i class="fa-solid fa-check text-white text-xl drop-shadow-lg" style="font-size: small;"></i>';

      button.appendChild(checkIcon);

      button.addEventListener('click', function () {
        var colorName = this.getAttribute('data-color');

        for (var j = 0; j < config.colors.length; j++) {
          if (config.colors[j].name === colorName) {
            applyColor(config.colors[j]);
            break;
          }
        }
      });

      colorsGrid.appendChild(button);
    }
  }

  function applyColor(color) {
    var root = document.documentElement;
    root.style.setProperty('--color-primary', color.primary);
    root.style.setProperty('--color-secondary', color.secondary);
    root.style.setProperty('--color-accent', color.accent);

    var colorOptions = document.querySelectorAll('.color-option');

    for (var i = 0; i < colorOptions.length; i++) {
      var option = colorOptions[i];
      var optionColor = option.getAttribute('data-color');

      if (optionColor === color.name) {
        option.classList.add('active');
        option.classList.add('ring-2');
        option.classList.add('ring-offset-2');
        option.classList.add('ring-white');
        option.classList.add('dark:ring-slate-900');
      } else {
        option.classList.remove('active');
        option.classList.remove('ring-2');
        option.classList.remove('ring-offset-2');
        option.classList.remove('ring-white');
        option.classList.remove('dark:ring-slate-900');
      }
    }

    state.currentColor = color.name;
    localStorage.setItem('color', color.name);
  }

  resetSettings.addEventListener('click', () => {
    localStorage.clear();
    applyFont('tajawal');
    applyColor(config.colors[0]);
    state.currentTheme = 'dark';
    document.documentElement.classList.add('dark');

    resetSettings.innerHTML =
      '<i class="fa-solid fa-check"></i> تم إعادة الضبط';
    resetSettings.classList.add('bg-green-500', 'text-white');

    setTimeout(() => {
      resetSettings.innerHTML =
        '<i class="fa-solid fa-rotate-right"></i> إعادة الضبط';
      resetSettings.classList.remove('bg-green-500', 'text-white');
    }, 2000);
  });

  createColorOptions();

  var savedColor = null;
  for (var i = 0; i < config.colors.length; i++) {
    var color = config.colors[i];

    if (color.name === state.currentColor) {
      savedColor = color;
      break;
    }
  }

  if (savedColor !== null) {
    applyColor(savedColor);
  }
}

function scrollToTop() {
  var scrollToTopBtn = document.getElementById('scroll-to-top');

  function toggleScrollButton() {
    if (window.pageYOffset > config.scrollToHeader) {
      scrollToTopBtn.classList.remove('opacity-0', 'invisible');
      scrollToTopBtn.classList.add('opacity-100', 'visible');
    } else {
      scrollToTopBtn.classList.add('opacity-0', 'invisible');
      scrollToTopBtn.classList.remove('opacity-100', 'visible');
    }
  }

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', toggleScrollButton);
  toggleScrollButton();
}

function testimonialsCarousel() {
  var carouselTrack = document.getElementById('testimonials-carousel');
  var prevButton = document.getElementById('prev-testimonial');
  var nextButton = document.getElementById('next-testimonial');
  var indicators = document.querySelectorAll('.carousel-indicator');
  var cards = document.querySelectorAll('.testimonial-card');

  var totalCards = cards.length;
  var cardsPerView = getCardsPerView();
  var maxIndex = totalCards - cardsPerView;

  if (state.currentCarouselIndex < 0) {
    state.currentCarouselIndex = 0;
  }

  if (state.currentCarouselIndex > maxIndex) {
    state.currentCarouselIndex = maxIndex;
  }

  function getCardsPerView() {
    if (window.innerWidth < 640) {
      return 1;
    }

    if (window.innerWidth < 1024) {
      return 2;
    }

    return 3;
  }

  function updateCarousel() {
    cardsPerView = getCardsPerView();
    maxIndex = totalCards - cardsPerView;

    if (state.currentCarouselIndex > maxIndex) {
      state.currentCarouselIndex = maxIndex;
    }

    if (state.currentCarouselIndex < 0) {
      state.currentCarouselIndex = 0;
    }

    var stepPercent = 100 / cardsPerView;
    var translatePercent = state.currentCarouselIndex * stepPercent;

    carouselTrack.style.transform = 'translateX(' + translatePercent + '%)';

    for (var i = 0; i < indicators.length; i++) {
      if (i === state.currentCarouselIndex) {
        indicators[i].classList.add('active');
        indicators[i].classList.add('bg-accent');
        indicators[i].classList.add('scale-125');

        indicators[i].classList.remove('bg-slate-400');
        indicators[i].classList.remove('dark:bg-slate-600');

        indicators[i].setAttribute('aria-selected', 'true');
      } else {
        indicators[i].classList.remove('active');
        indicators[i].classList.remove('bg-accent');
        indicators[i].classList.remove('scale-125');

        indicators[i].classList.add('bg-slate-400');
        indicators[i].classList.add('dark:bg-slate-600');

        indicators[i].setAttribute('aria-selected', 'false');
      }
    }
  }

  function goNext() {
    if (state.currentCarouselIndex < maxIndex) {
      state.currentCarouselIndex = state.currentCarouselIndex + 1;
    } else {
      state.currentCarouselIndex = 0;
    }

    updateCarousel();
    resetAutoplay();
  }

  function goPrev() {
    if (state.currentCarouselIndex > 0) {
      state.currentCarouselIndex = state.currentCarouselIndex - 1;
    } else {
      state.currentCarouselIndex = maxIndex;
    }

    updateCarousel();
    resetAutoplay();
  }

  function goTo(index) {
    if (index >= 0) {
      if (index <= maxIndex) {
        state.currentCarouselIndex = index;
        updateCarousel();
        resetAutoplay();
      }
    }
  }

  function startAutoplay() {
    stopAutoplay();

    state.carouselInterval = setInterval(goNext, config.carouselAutoplayDelay);
  }

  function stopAutoplay() {
    if (state.carouselInterval !== null) {
      clearInterval(state.carouselInterval);
      state.carouselInterval = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  nextButton.addEventListener('click', function () {
    goNext();
  });

  prevButton.addEventListener('click', function () {
    goPrev();
  });

  for (var i = 0; i < indicators.length; i++) {
    (function (index) {
      indicators[index].addEventListener('click', function () {
        goTo(index);
      });
    })(i);
  }

  carouselTrack.addEventListener('mouseenter', function () {
    stopAutoplay();
  });

  carouselTrack.addEventListener('mouseleave', function () {
    startAutoplay();
  });

  window.addEventListener('resize', function () {
    updateCarousel();
  });

  updateCarousel();
  startAutoplay();
}

function renderPortfolio() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }

  activeNavigation();
  themeToggle();
  mobileMenu();
  settingsSidebar();
  tabsFilters();
  scrollToTop();
  testimonialsCarousel();
}

renderPortfolio();
