# Shikimori View Extension

Расширение для браузера, добавляющее функциональность просмотра аниме сериалов на сайте shikimori

![Пример работы расширения](src/assets/screenshot.png)

## 🛠 Технологии

- ⚡ **Vite** - Сборщик проекта
- ⚛ **React** - Библиотека для построения пользовательского интерфейса
- 💙 **TypeScript** - Язык программирования
- 🧩 **CRXJS Vite Plugin** - Плагин для разработки Chrome расширений с Vite

## 📦 Установка для разработки

### Предварительные требования
- Node.js v22.17.0
- npm
- Браузер Chrome или его производные

### Шаги установки:

1. #### Клонируйте репозиторий:
```bash
git clone https://github.com/hikkathon/Shikimori-View-Extension-Chrome.git
cd shikimori-chrome-extension
```

2. #### Установите зависимости:
```bash
npm install
```

3. #### Запустите проект в режиме разработки:
```bash
npm run dev
```

4. #### Загрузите расширение в браузер:
- Откройте Chrome и перейдите по адресу `chrome://extensions/`
- Включите "Режим разработчика"
- Нажмите "Загрузить распакованное расширение" и выберите папку `dist` проекта

### 📦 Сборка для production
```bash
npm run build
```
Собранное расширение будет находиться в папке dist.

## ⛓️‍💥 Функциональность
- Просмотр аниме сериалов напрямую на shikimori
- Интеграция с интерфейсом сайта
- Дополнительные функции управления просмотром