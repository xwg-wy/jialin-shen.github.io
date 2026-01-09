// 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // 点击菜单项后关闭菜单（移动端）
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 如果是页面内锚点链接（不是其他页面）
            if (href !== '#' && href.startsWith('#') && document.querySelector(href)) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.knowledge-card, .card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // 控制台欢迎信息
    console.log('%c👋 欢迎来到申佳霖的个人网站！', 'color: #00d4ff; font-size: 18px; font-weight: bold;');
    console.log('%c📚 这里记录了我的数据科学学习旅程', 'color: #8a8aa3;');
    console.log('%c💡 网站已成功加载，祝您浏览愉快！', 'color: #00d4ff;');
    
    // 页面加载动画
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
});