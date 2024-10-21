#!/bin/bash

# Script de instalação dos pacotes do repositorio

#? Instalando o Angular

npm i @angular/cli@16.1.0
npm i

#! Caso não rode:

# npx -p @angular/cli
# npm i @angular/cli@16.1.0
# npm i

#? Instalar o Angular Material

npm run ng add @angular/material
npm run ng generate module shared/material

#? Instalar a Mascara

npm install --save ngx-mask

#? Instalar o SweatAlert 2

npm install sweetalert2
