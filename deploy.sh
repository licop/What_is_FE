#!/bin/bash

# 将静态文件拷贝到服务器
scp -r what_is_fe_dist root@39.107.225.18:/usr/local/nginx/html
