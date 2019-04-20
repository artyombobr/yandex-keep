# Содержание  
[1. Адаптивная вёрстка](#html)  
[2. Типизация](#ts)  
[3. Node.js](#node)  
[4. React, Redux](#react)  
[5. Тестирование] (#tests)


<a name="html"><h2>Адаптивная вёрстка</h2></a>
В выборе между less и scss, выбор пал в сторону scss, исходя из информации в интернете и его популярности. Выбрал scss, а не sass из-за обратной совместимости.

Настройку WebPack взял готовую, чтобы не изобретать велосипед. Но с логикой настройки webPack разобрался, после не совсем удачной попытки на отборе. https://github.com/artyombobr/smarthome/blob/master/webpack.config.js

Добавил Stylelint + ESLint + precommit

Сверстать по PixelPerfect без погрешности не получилось, у меня windows и не получилось найти бесплатный шрифт Helvetica, который бы выглядел точно так как в макете. Но возможно на Mac все отобразится правильно.
<img src="https://pp.userapi.com/c851420/v851420964/e2c35/dT_ZVzzdB5Q.jpg" alt=""/> 

#### Адаптивная типографика
Для адаптивной типографики написал mixin который начинает увеличивать линейно font-size и line-height от минимального разрешения до максимального.

#### Адаптивные изображения
Использовал адаптивные изображения, в зависимости от разрешения с сервера грузятся разные картинки. На следующем этапе, во время сохранения картинки от пользователя, она с помощью библиотеки будет нарезаться на разные и сохраняться на сервер.

Раскрытие заметки сходится только с макетом 375px, на больших экранах видно что заметка пропадает из грид. Это исправлю.

В браузере mozilla скрыл скрол в тэгах.

Для обрезки заголовка использовал свойство -webkit-line-clamp: 2, но получилось его применить только в DevTools.

<a name="ts"><h2>Типизация</h2></a>
О размерах заметок по ширине. 

Разделим размеры экрана на три типа. Большой, средний, маленький. 

На маленьких гриды занимают две колонки, а каждая заметка размером в две колонки. 
На средних экранах гриды занимают 4 колонки, а каждая заметка две колонки. 

На больших экранах грид состоит из 4 колонок, размер заметки в ширину бывает 4, 3, 2 колонки.

Следовательно, в одной строке могут разместиться заметки размером:
 1) 4+2
 2) 3+3
 3) 2+2+2
 
 Если рассматривать ситуацию когда размеры заметок у нас:
 4 + 3 + 3  + ...(много заметок размером 3)... + 3 + 3 + 2
 
 Очень старая заметка размером 2 займет первую строку, если у нас будет возможность менять порядок. Я как пользователь, 
 хочу видеть заметки в хронологическом порядке, следовательно, менять порядок заметок нельзя.
 
 Будем идти по массиву и набирать строки, если следующая заметка не влазит, растягиваем сумму предыдущих 
 до 6 (3+2 -> 3+3)  или ужимать до 6 (3 + 4 -> 3 + 3) 
 
 Но у нас еще есть ситуация, когда в строке есть заметка, высота которой позволяет рядом разместить в несколько 
 строк другие. Но для этого нам нужно знать высоту каждой заметки. 
 
 Я придумал такое решение: 
 
 Во время заполнения формы, рядом, так чтобы пользователь этого не видел, генерируем три заметки с разными размерами по
 ширине и получаем высоту через offsetHeight. 
 
 Ну а ширину заметок, делаем максимально маленькой, но чтобы высота не превышала ширину, тоже с помощью offsetHeight и
 offsetwidth. 
 
 Это удастся реализовать во время работы над окном добавления заметки. 
 
 Пока что в методе addNote написан алгоритм заглушка. 
 
 
<a name="node"><h2>Node.js</h2></a>

Выбрал библиотеку axios:

1) автоматическое преобразование данных JSON.
2) Обработка ошибок.
3) Наличие значений по умолчанию.
4) Наличие перехватчиков.
5) Возможность отслеживать ход выполнения запроса.



## API

`GET /api/cards` - содержимое коллекции заметок;

`GET/api/cards?color=1` - фильтрация по id цвета;

`POST /api/cards` - создание новой заметки;

`DELETE /api/cards/:id` - удаление заметки;

`PATCH /api/cards/:id` - модификация заметки;

`GET /api/cards/archive` - содержимое архива;

`POST /api/cards/archive/:id` - добавление заметки в архив;

Запустить только API сервер

```
npm run start-server
```

Запустить приложение с API

```
npm start
```

### TODO

Добавить MongoDB для более логичной работы с id. 


<a name="react"><h2>React, Redux</h2></a>

Вернулся к старой структуре проекта, когда сервер и фронт имеют один package.json. 

Перешел обратно на eslint с tslint, код стал лучше и стало проще работать.

Перешел на yarn, он работает быстрее. 

В задании было сказано фильтровать с помощью кода, написанного во втором задании, 
но логичнее бы было фильтровать на клиенте и не слать лишние запросы. Написал логику фильтрации на клиенте.

<a name="tests"><h2>Тестирование</h2></a>

####Запуск тестов

```
npm run test
```

Тесты сервера лежат в папке `src/__tests__` , так как не удалось подключить корневую папку. 
