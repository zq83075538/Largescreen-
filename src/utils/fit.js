// 屏幕适配方法
const FitMethod = {
    contain: function(dom, width, height, left, top, position = 'center'){
        if(dom.parentNode != document.body){
            dom.style.transformOrigin = ''
            dom.style.transform = '';
            dom.style.left = left + 'px';
            dom.style.top = top + 'px';
            return;
        };
        let W = window.innerWidth;
        let H = window.innerHeight;
        let R = Math.min(W / width, H / height);
        let leftOffset = 0, topOffset = 0;
        switch(position){
            case 'center':
                leftOffset = ((W - width * R) * .5) >> 0;
                topOffset = ((H - height * R) * .5) >> 0;
                break;
            case 'end':
                leftOffset = (W - width * R) >> 0;
                topOffset = (H - height * R) >> 0;
                break;
        }
        dom.style.transformOrigin = 'left top'
        dom.style.transform = 'scale(' + R + ',' + R + ')';
        dom.style.left = (left + leftOffset) + 'px';
        dom.style.top = (top + topOffset) + 'px';
    },
    over: function(dom, width, height, left, top, position = 'center'){
        if(dom.parentNode != document.body){
            dom.style.transformOrigin = ''
            dom.style.transform = '';
            dom.style.left = left + 'px';
            dom.style.top = top + 'px';
            return;
        };
        let W = window.innerWidth;
        let H = window.innerHeight;
        let R = Math.max(W / width, H / height);
        let leftOffset = 0, topOffset = 0;
        switch(position){
            case 'center':
                leftOffset = ((W - width * R) * .5) >> 0;
                topOffset = ((H - height * R) * .5) >> 0;
                break;
            case 'end':
                leftOffset = (W - width * R) >> 0;
                topOffset = (H - height * R) >> 0;
                break;
        }
        dom.style.transformOrigin = 'left top'
        dom.style.transform = 'scale(' + R + ',' + R + ')';
        dom.style.left = (left + leftOffset) + 'px';
        dom.style.top = (top + topOffset) + 'px';
    }
};

// 适配参数
function fitConfigure(){
    console.log(window.location.href, '-', /[\&\?]fit\=([^\=\&]+)/i.test(window.location.href))
    if(/[\&\?]fit\=([^\=\&]+)/i.test(window.location.href)){
        let args = RegExp.$1.split('_');
        let [ type = 'contain', position = 'center', crop = '1' ] = args;
        return { type, position, crop: crop >> 0 };
    } else {
        return { type: 'contain', position: 'center', crop: 1 };
    }
}

export { fitConfigure, FitMethod };