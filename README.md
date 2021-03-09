# server-backup

El punto al final es obligatorio

docker build -t dbbackup_server .

docker run -p 3001:3000 --network=sd_network --name server_backup -d dbbackup_server