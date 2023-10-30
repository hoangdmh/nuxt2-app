export default function(context){
    console.log('[Middleware check visit]', Object.keys(context.route));
    console.log('[Middleware check visit]', context.route);
}