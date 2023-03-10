# Проекты

[CSharp](GrpcServiceCS/Readme.md "")  
  
[TypeScript](GrpcServiceTS/Readme.md "")  


# Контракты
Cs и Ts проекты выступают одновременно и сервисом и клиентом, но по разным .proto контрактам.  
  
Оба проекта используют одинаковые proto файлы:  
- input.proto - cs сервис, ts клиент  
- output.proto - ts сервис, cs клиент  
  
Найти proto файлы можно тут:  
[GrpcServiceCS/GrpcServiceCS/Protos](GrpcServiceCS/GrpcServiceCS/Protos "")  
[GrpcServiceTS/proto](GrpcServiceTS/proto "")   


# Credentials
Используются Insecure Credentials. Должны быть одинаковые на клиенте и сервере.