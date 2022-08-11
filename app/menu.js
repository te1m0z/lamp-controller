const electron = require('electron');

const tempalte = [
    {
        label: 'Приложение',
        submenu: [
            {
                label: 'Перезагрузить',
                click() {
                    electron.app.quit();
                    electron.app.relaunch();
                }
            },
            {
                label: 'Закрыть',
                accelerator: 'Control+Q',
                role: 'quit'
            }
        ]
    },
    {
        label: 'Редактировать',
        submenu: [
            {
                label: 'Назад',
                accelerator: 'Control+Z',
                role: 'undo',
            },
            {
                label: 'Вырезать',
                accelerator: 'Control+X',
                role: 'cut',
            },
            {
                label: 'Копировать',
                accelerator: 'Control+C',
                role: 'copy',
            },
            {
                label: 'Вставить',
                accelerator: 'Control+V',
                role: 'paste',
            },
            {
                label: 'Выбрать все',
                accelerator: 'Control+A',
                role: 'selectall'
            }
        ]
    }
];

module.exports = electron.Menu.buildFromTemplate(tempalte);
