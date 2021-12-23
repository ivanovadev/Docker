4. Nginx + Node.js + scaling
Запустити за допомогою Docker Compose контейнер Nginx, який буде proxy для декількох контейнерів Helloworld Node.js сервісу і буде балансувати навантаження за алгоритмом round-robin. Nginx має слухати на порту 8000 host машини. Кількість контейнерів Helloworld Node.js сервісу повинно маштабуватися командою docker-compose up --scale.
