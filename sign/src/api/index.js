import request from '@/utils/request';

// 登陆接口
export let login = code=>{
  return request.post('http://123.206.55:7001/user/code2session', {
    code
  })
}
export let addSign = params=>{
  return request.post('http://123.206.55:7001/sign',params)
}

        
