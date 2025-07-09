// 语言数据仓库
const languageData = {
  zh: {
    title: "欢迎来到我的博客",
    article: "<p>这是我的第一篇博客文章...</p>",
    nav: ["首页", "关于", "联系"]
  },
  en: {
    title: "Welcome to My Blog",
    article: "<p>This is my first blog post...</p>",
    nav: ["Home", "About", "Contact"]
  },
  ja: {
    title: "私のブログへようこそ",
    article: "<p>これは最初のブログ投稿です...</p>",
    nav: ["ホーム", "について", "連絡"]
  }
};

// 语言切换函数
function changeLanguage(lang) {
  document.getElementById('title').innerText = languageData[lang].title;
  document.getElementById('article').innerHTML = languageData[lang].article;
  
  // 更新导航（示例）
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link, index) => {
    link.innerText = languageData[lang].nav[index];
  });
}

// 绑定点击事件
document.querySelectorAll('nav a[data-lang]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute('data-lang');
    changeLanguage(lang);
    localStorage.setItem('selectedLang', lang); // 记住选择
  });
});

// 初始化语言
const savedLang = localStorage.getItem('selectedLang') || 'zh';
changeLanguage(savedLang);
