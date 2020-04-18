class ThemeColorSwitch {
  constructor(page) {
    this.toggle = document.querySelector('.theme-color-switch');
    this.page = document.querySelector(page);
    this.localStorageKey = 'altThemeColor';
    this.localStorageValue = 'on';

    if (localStorage.altThemeColor === this.localStorageValue) {
      this.appAction();
    }

    this.toggle.addEventListener('click', this.appLogic.bind(this));
  }

  appLogic() {
    if (localStorage.altThemeColor === this.localStorageValue) {
      localStorage.removeItem(this.localStorageKey);
      this.appAction();
    } else {
      localStorage.setItem(this.localStorageKey, this.localStorageValue);
      this.appAction();
    }
  }

  appAction() {
    this.toggle.classList.toggle('switch-on');
    this.page.classList.toggle('alt-theme-color');
  }
}
