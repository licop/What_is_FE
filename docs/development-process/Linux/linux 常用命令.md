# linux 常用命令

## ls 命令

就是 list 的缩写，通过 ls 命令不仅可以查看 linux 文件夹包含的文件，而且可以查看文件权限(包括目录、文件夹、文件权限) 查看目录信息等等。

```
ls -a 列出目录所有文件，包含以.开始的隐藏文件
ls -A 列出除.及..的其它文件
ls -r 反序排列
ls -t 以文件修改时间排序
ls -S 以文件大小排序
ls -h 以易读大小显示
ls -l 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来
```

## cd 命令

cd(changeDirectory) 命令语法, 切换当前目录至 dirName

```
   cd /  进入目录
   cd ~  进入home目录
   cd - 进入上一次工作路径
```

## pwd 命令

pwd 命令用于查看当前工作目录路径。

```
  pwd 查看当前路劲
  pwd -P 查看软链接的实际路径
```

## mkdir 命令

mkdir 命令用于创建文件

```
 mkdir t  当前工作目录下创建名为t的文件夹
 mkdir -p  /tmp/test/t1/t  在 tmp 目录下创建路径为 test/t1/t 的目录，若不存在，则创建
```

## rm 命令

删除一个目录中的一个或多个文件或目录

```
  rm -rf test
```

## mv 命令

移动文件或修改文件名，根据第二参数类型（如目录，则移动文件；如为文件则重命令该文件）。

当第二个参数为目录时，第一个参数可以是多个以空格分隔的文件或目录，然后移动第一个参数指定的多个文件到第二个参数指定的目录中。

```
  mv test.log test1.txt    将文件 test.log 重命名为 test1.txt

  mv llog1.txt log2.txt log3.txt /test3  将文件 log1.txt,log2.txt,log3.txt 移动到根的 test3 目录中

  mv -i log1.txt log2.txt  将文件 file1 改名为 file2，如果 file2 已经存在，则询问是否覆盖

```

## cp 命名

将源文件复制至目标文件，或将多个源文件复制至目标目录。

注意：命令行复制，如果目标文件已经存在会提示是否覆盖，而在 shell 脚本中，如果不加 -i 参数，则不会提示，而是直接覆盖！

```
  -i 提示
  -r 复制目录及目录内所有项目
  -a 复制的文件与原文件时间一样

  cp -ai a.txt test   复制 a.txt 到 test 目录下，保持原文件时间，如果原文件存在提示是否覆盖。

```

## cat 命令

cat 主要有三大功能：

```
  cat filename     一次显示整个文件

  cat > filename   从键盘创建一个文件

  cat file1 file2 > file 将几个文件合并为一个文件:

```

## which 命令

查看可执行文件的位置

```
  which node   查看node执行文件位置
```

## whereis 命令

查看文件的位置

## kill 命令

```
  kill -9  终止进程
```

## lsof 命令

列出谁在使用某个端口

```
  lsof -i :3306
```

## ssh 命令

ssh 用于登录远程主机

```
  ssh root@39.107.225.18  远程连接服务器
```

## scp 命令

scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令

```
   scp local_file root@39.107.xxx.xx:/remote_folder
   scp -r  local_folder root@39.107.xxx.xx:/remote_folder
```

## vim/vi 命令

新建编辑文件

```
  vi [filename]  新建并且编辑文件  然后按i键进入编辑状态，输入内容，最后按一下esc，再按冒号，输入wq就保存退出了

  vi /usr/local/nginx/conf/nginx.conf 打开修改nginx配置文件

```

## 更多参考

- [Linux 常用命令学习](https://www.runoob.com/w3cnote/linux-common-command-2.html)
