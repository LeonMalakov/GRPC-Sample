# Запуск

Запускать с аргументами:  
```--urls http(s)://ip:port```  


# Сборка proto классов

Классы собираются сами. Proto файлы должны быть указаны в csproj.  
Можно собирать только клиенстскую часть (GrpcServices="Client"), только серверную (GrpcServices="Server") или обе (GrpcServices="Both").