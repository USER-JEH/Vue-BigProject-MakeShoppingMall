import requests from "./request";

///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
