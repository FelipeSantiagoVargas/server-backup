# server-backup

El punto al final es obligatorio

docker build -t dbbackup_server .

docker run -p 3001:3000 --name server_backup -d dbbackup_server