1.- Primero creo el archivo de Dockerfile y .dockerignore para el backend

![image](https://user-images.githubusercontent.com/56493087/230694536-93d63a0d-eb34-41d5-9ba8-f7971198e913.png)

2.- En el archivo archivo de dockerfile del backend lleva la siguinte configuracion

![image](https://user-images.githubusercontent.com/56493087/230694588-9ae6cf90-2034-4ab7-88f0-cf236b465931.png)


3.- Posteriormente una vez hecho el frontend realizo el archivo Dockerfile y .dockerignore para el frontend

![image](https://user-images.githubusercontent.com/56493087/230694616-9b74c91a-ce2e-4159-bd90-80e2126b2a08.png)

4.- En el archivo dockerfile del frontend, coloque las configuraciones necesarias para la creacion de la imagen de node y de nginx

![image](https://user-images.githubusercontent.com/56493087/230694657-f266e5b0-9470-4819-b8f7-8c3b19822be1.png)

5.-Por ultimo en el docker-compose en la raiz del proyecto tenemos la siguiente configuracion

En el cual establecemos 3 servicios: 
  mongodb:
    Donde usamos una imagen oficial de mongo de dockerhub
    Establecemos la direccion de las variables de entorno para la conexion
    Exponemos el puerto
  
  backend:
    Definimos el contexto el cual nos permite buscar el archivo Dockerfile
    Esteblecemos el puerto
    La direccion de las variables de entorno
    Indicamos que depende del servicio de mongodb
    
  frontend:
    Al igual que el backend indicamos el contexto
    Indicamos el puerto
    Indicamos que depende del servicio del backend


![image](https://user-images.githubusercontent.com/56493087/230694675-a7cf22be-107c-40b4-b5d3-1fdc7392aea1.png)

Imagen de funcionaldiad del contenedor

![image](https://user-images.githubusercontent.com/56493087/230694691-c8499c2f-4e08-4ecd-acab-bac5b4b5aad9.png)

![image](https://user-images.githubusercontent.com/56493087/230694699-2082ff8e-1264-4536-8e7c-b11dc65e233d.png)

![image](https://user-images.githubusercontent.com/56493087/230694714-f7a40499-98b2-4bff-9ed2-de4099c9737d.png)
