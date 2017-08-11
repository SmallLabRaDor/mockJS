/**
 * Created by Administrator on 2017/8/5.
 */
var Mock = require('mockjs')
module.exports = function () {
  return{
    user:Mock.mock({
      'name|22': [{
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last',
        data:"@date()",
        img:"@image()"
      }]
    })
  }
}