document.addEventListener('DOMContentLoaded', function() {

    const tabsWrapper = document.getElementById('tabs-wrapper');
    const tabsButtons = tabsWrapper.querySelectorAll('button');

    const tabsContent = document.getElementById('tabs-content');
    const tabsWindows = document.querySelectorAll('#tabs-content > div');

    tabsWrapper.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if ('tab' in event.target.dataset) {
            tabsButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            tabsWindows.forEach(win => win.classList.remove('active'));
            console.log(tabsContent)
            tabsContent.querySelector(`[data-tab-name="${event.target.dataset.tab}"]`).classList.add('active');
        }
    }
});
