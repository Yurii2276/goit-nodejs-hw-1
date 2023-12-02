<!-- Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table) -->
node index.js --action="list" https://monosnap.com/file/VHpVUgnzh0j5H8pryETKXXo1mI2F9K

<!-- Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує. -->
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6 https://monosnap.com/file/6In2k7vGEFCJkr9DAnUQGJ0bEaeMXY

<!-- Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту -->
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22 https://monosnap.com/file/M5DF0DdpR8YpLpB0fwzYy7Mm1p9V4o

<!-- Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує. -->
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH https://monosnap.com/file/wDGqZX5ESDFn7jrErHbvIU1IWHEQPU