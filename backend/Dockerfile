# Selecciona la imagen base
# From imagen padre, puede ser creada por otra persona, como quiero correr una imagen de Python puedo
# FROM python:3.9-slim
FROM python:3.11.4-alpine3.18

# Establece el directorio de trabajo dentro del contenedor, /app se crea automaticamnte y todos los comandos que se ejecuten a partir de ahora se van a correr en ese directorio
WORKDIR /app

# Copia los archivos de la aplicación donde está este dockerfile en el contenedor, en la imagen
COPY . /app

# Instala las dependencias
# RUN pip install --no-cache-dir --trusted-host pypi.python.org -r requirements.txt
RUN pip install -r requirements.txt


# Expone el puerto 8000 para que sea accesible desde el host
EXPOSE 8000

# Define el comando para ejecutar la aplicación
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]

