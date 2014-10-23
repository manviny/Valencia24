Valencia24
==========

##Create Cordova project with angularjs and onsenui
```bash
$ # 1.- install angular project
$ mkdir valencia24 && cd $_
$ yo angular Valencia24
$ grunt serve               # it will populate index.html with the needed js and css files
$ # fix grunt.js 
$ # line 166      cwd:  '<%= yeoman.app %>'  ==>   cwd: ''      # so it will find bower.json
$ grunt serve               # it should work 


$ # 2.- if you want OnsenUI framework to be installed
$ bower install onsenui --save
$ grunt serve
$ # fix bower_components/onsenui/bower.json  to load css files to our index.html
$ # inject 'onsenui' to app.js

$ # 3.- Create a cordova project
$ cordova create valencia24 com.patrimonio24.valencia24 "Valencia24"
$ # mode all folders to the root ../
$ # Add platform
$ cordova platform add android
$ # Add plugin
$ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git
```

##Build and emulate the project
```bash
$ # fix grunt.js 
$ # line 21       dist: 'dist'               ==>   dist: 'www'  # it will build to /www cordova project
$ # build and emulate
$ cordova build android && cordova emulate android 
```

##Install components from my github
[instalar componente leaflet para angular](https://github.com/manviny/mny_leaflet)  
```bash
$ # leaflet para angular
$ bower install manviny/mny_leaflet --save
$ # inject manviny.mny-leaflet to app.js
```

####  Depurar con weinre
* poner esta linea de codigo en index.html    
* < script src="http://192.168.1.20:8080/target/target-script-min.js#anonymous"></script >
* ir a /webapp
* weinre --boundHost -all-


#### 6. now you ca use

[grunt](http://gruntjs.com/)

[bower](http://bower.io/)

[onsenui](http://onsenui.io/)

[angular generator](https://github.com/yeoman/generator-angular)

[cordova plugins](http://plugins.cordova.io/#/viewAll)
