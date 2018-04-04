
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert=require('assert');
const driver = new Builder().forBrowser('firefox').build();
module.exports={
    passwordLoad:(...args)=>{
        return args.reduce((phoneNumber,password)=>{
            phone.sendKeys(phoneNumber);
            pwd.sendKeys(password);
            return spanPhone.text,spanPwd.text;
        })
    }
};

 function test1(phoneNumber,password){
     driver.get('http://mindsight-webclient.chinacloudsites.cn/');
     driver.findElement(By.xpath("//*[text()='密码登录']")).click();
     driver.findElement(By.id('phoneNumberField1')).sendKeys(phoneNumber);
     driver.findElement(By.id('passwordField')).sendKeys(password);
     driver.findElement(By.xpath("//*[@type='submit']")).click();
    let span1=driver.findElement(By.xpath('//*[@id="loginForm"]/div[1]/span')).text;
    let span2=driver.findElement(By.xpath('//*[@id="loginForm"]/div[2]/span')).text;
    return span1;
}

assert.equal(test1('13912949323','123qaz'),'手机号不能为空！');
