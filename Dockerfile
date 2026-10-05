# نسخه production: فایل‌ها داخل ایمیج کپی می‌شوند (بدون نیاز به volume)
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
