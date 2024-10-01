#!name=123Pan Web Enhance
#!desc=123盘网页去广告+解除网页端流量1G下载限制
#!tips=请单文件下载，不要文件夹或多文件下载
#!tgchannel=https://t.me/iSharesubcribe
#!howtouse=小火箭、Surge用户直接添加模块，QuantumultX用户添加重写时打开解析器

[Script]
123pan.Ads = type=http-response, pattern=^https?:\/\/www\.123pan\.com\/s\/[0-9a-zA-Z=_/-]+\.html, script-path=https://github.com/thebestkyle323/Quantumult-x/main/123pan.js, requires-body=true, max-size=-1, timeout=60
123pan.Enhance = type=http-request, pattern=^https?:\/\/www\.123pan\.com\/b\/api\/share\/download\/info, script-path=https://github.com/thebestkyle323/Quantumult-x/main/123pan.js, timeout=60

[MITM]
hostname = %APPEND% www.123pan.com
