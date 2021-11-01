export const dataCases = [
    {
        key: '1',
        text: 'Первое, что стоит сделать, увидев любую форму, попробовать просто по ней жмакнуть. Что ожидаем увидеть? Если кнопка сабмита не деактивирована (как в нашем случае), то самое ожидаемое поведение - форма выведет ошибки, сообщая, что не все обязательные поля для ввода были заполнены. Один кейс найден.',
    },
    {
        key: '2',
        text: 'Второй кейс чем-то похож на предыдущий. Только в этом случае мы не заполняем одно поле (А или B). А остальные заполняем. Почему нельзя оставить пустым только поле C? Расскажем чуть ниже :)',
    },
    {
        key: '3-7',
        text: 'Далее у нас идут позитивные кейсы. Вспоминаем уроки по геометрии, сколько существует треугольников? Нам удалось выделить пять видов: прямоугольный (3, 4, 5), тупоугольный (2, 3, 4), остроугольный (66, 67, 68), равнобедренный (3, 3, 5) и равносторонний (6, 6, 6). Все их можно перебрать, добавив себе пять очков к кейсам.',
    },
    {
        key: '8',
        text: 'Снова возвращаемся к урокам геометрии. А какого треугольника быть не может? Верно, такого, у которого сумма двух маленьких сторон короче большой стороны (2, 3, 10). Все потому, что стороны в таком случае просто не смогут соединиться. Итак, еще один кейс: "не выполнились условия треугольника".',
    },
    {
        key: '9',
        text: 'Очередной кейс, попробовать ввести в форму что-то, что никак не может являться сторонами треугольника. Например, буквы q, w, e. Итак, новые кейс найден: это не треугольник.',
    },
    {
        key: '10',
        text: 'Далее начинается специфика тестирования в целом, и тестирование веб-приложения в частности. Тут, для начала, мы проверяем слишком большое число. Большим числом называем такое, которое больше максимального значения INT. Например, число 4294967295.',
    },
    {
        key: '11',
        text: 'Два оставшихся кейса посвящены тестированию безопасности. Первый кейс, это проверка на SQL-инъекцию. На самом деле, конечно, писать настоящую инъекцию не надо, главное вообще подумать в эту сторону. Это уже будет означать, что о таком типе уязвимости вы помните. В нашем случае достаточно было ввести в поле такие ключевые слова, как select, or или where.',
    },
    {
        key: '12',
        text: 'И последний кейс: XSS-уязвимость. Для того, чтобы кейс засчитался, необходимо было ввести тег для JS-кода. Т.е. <script> — в этом случае последний кейс засчитается и мы получим промокод на скидку.',
    },
]

export const dataBugs = [
    {
        key: '1',
        text: 'Помните, мы говорили о том, что для кейса 2 пустым надо оставить либо поле A, либо поле B? Так вот, все дело в том, что первый баг - поле C не проверяется на заполненность. Если оставить его пустым, форма ничего на это не скажет и честно попытается определить, что же это за треугольник.',
    },
    {
        key: '2',
        text: 'Второй баг связан снова с геометрией. Что такое равносторонний треугольник? Верно, это такой треугольник, у которого все стороны равны? Именно так подумали и мы. Потому если ввести в каждое поле по нулю, форма честно скажет, что этот треугольник равносторонний. Еще один баг найден.'
    },
    {
        key: '3',
        text: 'Еще один баг, форма не умеет работать с нецелыми числами. Т.е. если ввести 2.2 для одной из сторон, то форма не сможет определить, что же это за треугольник.\n'
    },
    {
        key: '4',
        text: 'Последний баг снова связан с XSS. Но ведь мы уже ее проверяли - недоумевали многие. Все так. Мы уже вводили тег <script></script> и форма нас ловила. Как? Вероятно (на самом деле точно), там просто стоит проверка, что если поле содержит подстроку <script>, то это попытка XSS. И правильно обработала такую атаку. Так делает большое количество веб-приложений. Но вот что частенько разработчики забывают: HTML-теги не являются регистрозависимыми. А если проще — они могут быть написаны как маленькими буквами, так и большими. Да хоть вперемешку. Лишь бы в итоге получался верный тег. И если в нашу форму ввести <SCRIPT>, то далее можно писать любой JS-код. Он исполнится и последний баг будет засчитан.'
    },
]