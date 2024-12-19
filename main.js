const allReadBtn = document.querySelector('.markAsRead');
const notifications = document.querySelectorAll('.notification');
const notificationNum = document.querySelector('.notificationsNum');


allReadBtn.addEventListener('click', ()=>{
    notifications.forEach(notification => {
        notification.classList.remove('new');
        const dot = notification.querySelector('.notificationDot');
        if (dot) {
            dot.style.display = 'none';
        }
    });
    
    notificationNum.textContent = '0';
});