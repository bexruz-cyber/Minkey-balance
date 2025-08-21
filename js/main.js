
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-navbar');
    const navbarCollapse = document.getElementById('navbarNav');
    
    // Обработка скролла
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Фикс для мобильного меню в Bootstrap 5
    navbarCollapse.addEventListener('show.bs.collapse', function() {
        navbar.classList.add('scrolled');
    });
    
    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
        if (window.scrollY <= 50) {
            navbar.classList.remove('scrolled');
        }
    });
}); 





 








document.addEventListener('DOMContentLoaded', function() {
    // Находим все ссылки в навбаре
    const navLinks = document.querySelectorAll('#main-navbar .nav-link');
    
    // Для каждой ссылки добавляем обработчик
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение
        
        // Получаем ID целевого раздела из href
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Игнорируем ссылки на #
        
        // Находим целевой элемент
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Плавная прокрутка
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Учитываем высоту навбара
            behavior: 'smooth'
          });
          
          // Закрываем мобильное меню (если открыто)
          const navbarCollapse = document.querySelector('#navbarNav');
          if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });
  });










  function scrollToForm() {
    const form = document.getElementById('gymForm');
    if (form) {
      form.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }








  // Автозапуск при клике на видео
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.author-video');
    const playBtn = document.querySelector('.play-button');
    
    playBtn.addEventListener('click', function() {
      video.play();
      playBtn.style.display = 'none';
    });
    
    video.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
      } else {
        video.pause();
        playBtn.style.display = 'block';
      }
    });
  });







// В вашем коде найдите этот участок и измените:
document.querySelectorAll('.video-item:not(.main-featured-video)').forEach(item => {
    item.addEventListener('click', function() {
      console.log("Play video");
    });
  });






document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Функция для обработки появления элементов
    function handleScroll() {
        const elements = document.querySelectorAll('.audience-header, .audience-item, .audience-conclusion, .audience-btn');
        
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                if (el.classList.contains('audience-item')) {
                    const delay = el.getAttribute('data-delay') || 0;
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, delay * 300);
                } else {
                    el.classList.add('visible');
                }
            }
        });
    }
    
    // Проверяем при загрузке
    handleScroll();
    
    // И при скролле
    window.addEventListener('scroll', handleScroll);
});




        // Анимация появления элементов
        document.addEventListener('DOMContentLoaded', function() {
            function checkVisibility() {
                const cards = document.querySelectorAll('.feature-card');
                const windowHeight = window.innerHeight;
                
                cards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const delay = card.getAttribute('data-delay') || 0;
                    
                    if (cardPosition < windowHeight - 100) {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, delay * 300);
                    }
                });
            }
            
            // Проверяем при загрузке
            checkVisibility();
            
            // И при скролле
            window.addEventListener('scroll', checkVisibility);
        });






        document.addEventListener('DOMContentLoaded', function() {
            // Анимация появления при скролле
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.gym-title, .advantage-item, .video-title, .video-item');
                const windowHeight = window.innerHeight;
                
                elements.forEach(el => {
                    const elementPosition = el.getBoundingClientRect().top;
                    const offset = 100;
                    
                    if (elementPosition < windowHeight - offset) {
                        el.classList.add('visible');
                    }
                });
            };
            
            // Запускаем при загрузке и при скролле
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);
            
            // Клик по видео
            document.querySelectorAll('.video-item').forEach(item => {
                item.addEventListener('click', function() {
                    // Здесь можно добавить открытие модального окна с видео
                    console.log("Play video");
                });
            });
        });







                // Создаем плавающие точки
              







                
              // Обработчик отправки формы

              document.getElementById('gymForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const form = e.target;
                const messageEl = document.getElementById('formMessage');
                const submitBtn = form.querySelector('button');
                
                // Подготовка данных
                const formData = {
                    name: form.name.value.trim(),
                    phone: form.phone.value.trim()
                };
            
                // Валидация
                if (!formData.name || !formData.phone) {
                    showMessage('Iltimos, barcha maydonlarni to\'ldiring!', 'danger');
                    return;
                }
            
                // Показать загрузку
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <span class="spinner"></span>
                    Jo'natilmoqda...
                `;
            
                // Создаем URL с параметрами
                const scriptUrl = 'https://script.google.com/macros/s/AKfycbx4vcTBhpzahO5WcUaFmrN0iyjr0tJAZ7dtjZ584MsYDFiiKendDa84JVt4td_nJnW3/exec';
                const url = `${scriptUrl}?name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}`;
                
                // Создаем скрытый iframe для отправки (обход CORS)
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = url;
                document.body.appendChild(iframe);
            
                // Создаем скрытый img для проверки отправки
                const img = new Image();
                img.src = url; // Дополнительный запрос для надежности
                
                // Проверяем результат через 3 секунды
                const checkInterval = setInterval(function() {
                    // Можно добавить здесь проверку через AJAX, если нужно
                }, 3000);
            
                // Убираем элементы и показываем результат
                setTimeout(function() {
                    iframe.remove();
                    clearInterval(checkInterval);
                    
                    // Показываем успех (даже если не можем проверить ответ)
                    showMessage('Muvaffaqiyatli yuborildi!', 'success');
                    document.getElementById('paymentModal').style.display = 'block';
                    
                    // Сбрасываем форму
                    form.reset();
                    
                    // Восстанавливаем кнопку
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Obuna bo\'lish';
                    
                    // Открываем таблицу для проверки (опционально)
                    
                }, 3000);
            });
            
            // Функция показа сообщений
            function showMessage(text, type = 'success') {
                const messageEl = document.getElementById('formMessage');
                const colors = {
                    success: { bg: '#d4edda', text: '#155724' },
                    danger: { bg: '#f8d7da', text: '#721c24' }
                };
                
                messageEl.innerHTML = `
                    <div style="
                        padding: 12px;
                        border-radius: 4px;
                        background: ${colors[type].bg};
                        color: ${colors[type].text};
                        margin-top: 15px;
                    ">
                        ${text}
                    </div>
                `;
                messageEl.style.display = 'block';
                
                // Автоматическое скрытие через 5 секунд
                if (type === 'success') {
                    setTimeout(() => {
                        messageEl.style.display = 'none';
                    }, 5000);
                }
            }
            
            // Закрытие модального окна
            document.querySelector('.close').addEventListener('click', function() {
                document.getElementById('paymentModal').style.display = 'none';
            });
            
            window.addEventListener('click', function(e) {
                if (e.target === document.getElementById('paymentModal')) {
                    document.getElementById('paymentModal').style.display = 'none';
                }
            });
            
            // Обработчики платежных кнопок
            document.getElementById('visaPay').addEventListener('click', function() {
                window.open('', '_blank');
            });
            
            document.getElementById('uzcardPay').addEventListener('click', function() {
                window.open('', '_blank');
            });
            
            // Стили спиннера
            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    @keyframes spin { to { transform: rotate(360deg); } }
                    .spinner {
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        border: 2px solid rgba(255,255,255,0.3);
                        border-radius: 50%;
                        border-top-color: #fff;
                        animation: spin 1s linear infinite;
                        margin-right: 8px;
                        vertical-align: middle;
                    }
                    #formMessage div {
                        transition: all 0.3s ease;
                    }
                </style>
            `);

















            // Добавьте этот скрипт для работы аккордеона
document.querySelectorAll('.feature-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const featureList = toggle.nextElementSibling;
      toggle.querySelector('i').classList.toggle('fa-chevron-up');
      toggle.querySelector('i').classList.toggle('fa-chevron-down');
      featureList.classList.toggle('active');
    });
  });






  // Скрипт для работы модальных окон
// Полный JavaScript код
document.addEventListener('DOMContentLoaded', function() {
    // Плавающие точки
    const container = document.getElementById('mkpFloatingDots');
    const dotCount = 30;
    
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('mkp-floating-dot');
        
        // Случайная позиция
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        
        // Случайный размер
        const size = 2 + Math.random() * 5;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Случайная прозрачность
        dot.style.opacity = 0.2 + Math.random() * 0.5;
        
        // Анимация
        const duration = 5 + Math.random() * 10;
        dot.style.animation = `mkp-float ${duration}s linear infinite`;
        
        container.appendChild(dot);
    }
    
    // Добавляем CSS для анимации точек
    const style = document.createElement('style');
    style.textContent = `
        @keyframes mkp-float {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg); }
            50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg); }
            75% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Модальные окна
    const detailButtons = document.querySelectorAll('.mkp-detail-btn');
    const modalOverlay = document.getElementById('mkpModalOverlay');
    const closeButtons = document.querySelectorAll('.mkp-close-modal');
    
    // Открытие модалки
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tarif = this.getAttribute('data-tarif');
            document.body.style.overflow = 'hidden';
            modalOverlay.classList.add('active');
            document.getElementById(`${tarif}-modal`).classList.add('active');
        });
    });
    
    // Закрытие модалки
    function closeModal() {
        document.body.style.overflow = '';
        modalOverlay.classList.remove('active');
        document.querySelectorAll('.mkp-modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    modalOverlay.addEventListener('click', closeModal);
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});















