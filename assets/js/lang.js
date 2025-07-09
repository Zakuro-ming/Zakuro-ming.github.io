function switchLanguage(lang) {
    // 保存语言选择到本地存储
    localStorage.setItem('preferredLanguage', lang);
    
    // 根据当前页面路径跳转到对应语言版本
    const currentPath = window.location.pathname;
    
    // 如果是文章页
    if(currentPath.includes('/blog/')) {
        const articleName = currentPath.split('/').pop();
        window.location.href = `../../${lang}/blog/${articleName}`;
    } 
    // 如果是首页
    else {
        window.location.href = `../${lang}/index.html`;
    }
}

// 页面加载时检查已保存的语言偏好
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if(savedLang) {
        const currentLang = window.location.pathname.split('/')[1];
        if(currentLang !== savedLang) {
            switchLanguage(savedLang);
        }
    }
});
