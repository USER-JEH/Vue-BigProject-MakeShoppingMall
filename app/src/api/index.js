import requests from './request'
import mockRequests from './mockAjax'
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () =>
  requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqFloorList = () => mockRequests.get('/floor')

export const repGetSearchInfo = (params) =>
  requests({ url: '/list', method: 'post', data: params })

// /api/item/{ skuId }

export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: 'get' })

export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}
`,
    method: 'post',
  })

export const reqCartList = () =>
  requests({ url: '/cart/cartList', method: 'get' })

export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({
    url: `/cart/checkCart/${skuId}/${isChecked}
`,
    method: 'get',
  })
