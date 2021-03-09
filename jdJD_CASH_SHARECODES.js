/*
京东cash sharecode test from 东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let JD_CASH_SHARECODES = [
  'eU9Yar3jZv8h-G7Rz3NH1Q@eU90JrTjOaQ@eU9Yabq0Z65y-TvVw3oW3g@eU9YMYz7Jrlyjh2NjiJ5@eU9YOZTEI4NulQuEiyFg@eU9YaL3kZvok9TvSzXIV0A',//账号一的好友shareCode,不同好友中间用@符号隔开
  'eU9Yar3jZv8h-G7Rz3NH1Q@eU90JrTjOaQ@eU9Yabq0Z65y-TvVw3oW3g@eU9YMYz7Jrlyjh2NjiJ5@eU9YOZTEI4NulQuEiyFg@eU9YaL3kZvok9TvSzXIV0A',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有东东农场互助码
if (process.env.JD_CASH_SHARECODES) {
  if (process.env.JD_CASH_SHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.JD_CASH_SHARECODES.split('&');
  } else if (process.env.JD_CASH_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    JD_CASH_SHARECODES = process.env.JD_CASH_SHARECODES.split('\n');
  } else {
    JD_CASH_SHARECODES = process.env.JD_CASH_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < JD_CASH_SHARECODES.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JD_CASH_SHARECODES' + index] = JD_CASH_SHARECODES[i];
}
