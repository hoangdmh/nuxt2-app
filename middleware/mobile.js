var isLogin = true;

export default function (context) {
    console.log('[Middleware mobile]', Object.keys(context));
    context.isMobile = false;
    var userAgent = '';
    if(context.req){
        userAgent = context.req.headers['user-agent'];// kiểm tra thiết bị là mobile hay desktop
    }else {
        userAgent = navigator.userAgent;
    }

    if(/mobile/i.test(userAgent)){
        return context.isMobile = true;
    }

    if(!isLogin){
        context.redirect('/login');
    }
}