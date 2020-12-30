#!/usr/bin/env sh

read -p "release to aliyun@@39.107.225.18- are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # 构建静态文件
    npm run build
    
    # commit
    git add -A
    git commit -m "release"
    git push 

    # 将静态文件拷贝到服务器
    scp -r what_is_fe_dist root@39.107.225.18:/usr/local/nginx/html
fi
