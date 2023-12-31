
/*
角色管理相关的API请求函数
*/
import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {

  /*
  获取角色分页列表(带搜索)
  */
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  //角色删除
  removeById(id) {
    return request({
        url: `${api_name}/remove/${id}`,
        method: 'delete'
      })
  },
  //添加角色
  saveRole(role) {
    return request({
        url: `${api_name}/save`,
        method: 'post',
        data: role
    })
  },
  //根据id查询
  getById(id) {
    return request({
        url: `${api_name}/get/${id}`,
        method: 'get',

    })
  },
  //根据id修改
  updateById(role) {
    return request({
        url: `${api_name}/update`,
        method: 'put',
        data: role
    })
  },
  //批量删除
  batchRemove(idList) {
    return request({
        url: `${api_name}/batchRemove`,
        method: 'delete',
        data: idList
    })
  }
}
