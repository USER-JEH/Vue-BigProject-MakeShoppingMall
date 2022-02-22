import requests from './request'
import mockRequests from './mockAjax'
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () =>
  requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqFloorList = () => mockRequests.get('/floor')
