if ($request.url.indexOf('mb3admin.com/admin/service/registration') != -1) {
        $notification.post("Emby Premiere 已激活", "", "");
        $done({status: 200, headers: $response.headers, body: '{"cacheExpirationDays":999,"resultCode":"GOOD","message":"Device Valid"}' })
}else{
    $done({})
}
