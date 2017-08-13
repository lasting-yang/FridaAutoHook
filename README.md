# 使用说明
```
1. 利用反编译工具apktool对apk进行反编译，生成smali文件
$ apktool d xxx.apk 

2. 运行本脚本, 生成hook代码，支持输入多个smali文件
$ python generatehookcode.py xxx.smali xxx2.smali yyy.smali > hook.js

3. frida指定hook.js，运行app
$ frida -U  --no-pause -f packgename -l hook.js > log.txt
```

### TODO
```


```