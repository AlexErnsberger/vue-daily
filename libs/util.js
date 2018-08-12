import axios from 'axios'
const Util={
    imgPath:'http://127.0.0.1:8011/img/',
    apiPath:'http://127.0.0.1:8010/'
}

Util.ajax=axios.create({
    baseURL:Util.apiPath
})

Util.ajax.interceptors.response.use(res=>{
    return res.data;
})

Util.getTodayTime=function(){
    var date=new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

Util.prevDay=function(timestamp=(new Date()).getTime()){
    const date=new Date(timestamp);
    const year=date.getFullYear();
    const month=date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;
    const day=date.getDay()<10?'0'+date.getDay():date.getDay();
    return year+month+day;
}

export default Util