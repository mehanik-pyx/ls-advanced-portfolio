Попов Александр Евгеньевич курс Продвинутый веб 14.01.20-20.02.20

Пройдите по ссылке https://mehanik-pyx.github.io/ls-advanced-portfolio/dist/ чтобы открыть актуальную версию проекта

# Учебный шаблон проекта Portfolio

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же 
[последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

##  Чтобы развернуть проект необходимо:
```sh
$ git clone git@github.com:loftschool/ls-advanced-portfolio.git
$ cd ls-advanced-portfolio
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей **и откроет браузер** |
| build | Соберет проект для **production** (проект готов к загрузке на сервер) |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

Изменения в package.json: "browserslist": "last 2 versions" -> "defaults".

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```

##### Либо:
```sh
$ yarn имя_скрипта
```
