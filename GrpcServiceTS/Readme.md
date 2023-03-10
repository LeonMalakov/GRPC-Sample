# Запуск

Выкачиваем зависимости:  
```npm install```  
  
Собираем:  
```npm run build```  
  
Запускаем:  
```npm run start```  
  
IP, порт и credentials захардкожены.



# Сборка proto классов

Выполняем:  
```npm run proto-gen```  
  
Все .proto файлы из директории proto будут собраны в .ts и .js классы по путям:  
src/proto  
src/proto_js  
  
При сборке файлы из proto_js копируются в lib/proto.



# Как воспроизвести

### Устанавливаем пакеты (можно скопировать из package.json или выполнить npm install):
dependencies:  
- @grpc/grpc-js  
  
devDependencies:  
- @types/google-protobuf  
- grpc_tools_node_protoc_ts  
- grpc-tools  
- copyfiles (используется скриптом build для копирования файлов)

### Копируем скрипты:
build (собирает проект и копирует js классы):  
```"build": "tsc && copyfiles -f src/proto_js/*.js lib/proto"```   
  
proto-gen (генерирует ts и js классы):  
```"proto-gen": "grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/proto_js --ts_out=grpc_js:src/proto --grpc_out=grpc_js:src/proto_js -I ./proto proto/*.proto"```

### Создаем директории:
Директории для генератора классов нужно создать вручную:  
- src/proto  
- src/proto_jc   