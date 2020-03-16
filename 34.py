from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time

desired_cap = {
 'browser': 'Chrome',
 'browser_version': '81.0 beta',
 'os': 'Windows',
 'os_version': '10',
 'resolution': '1920x1080',
 'name': 'Checking if the leavelog is updated'
}

driver = webdriver.Remote(
    command_executor='http://himanshukumar14:WnsNz7SsYbyT291rkPJr@hub.browserstack.com:80/wd/hub',
    desired_capabilities=desired_cap)

driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.get('http://akashsuper2000.github.io/faculty-dashboard')
driver.fullscreen_window()
username = driver.find_element_by_name('id')
username.send_keys('sample')

password = driver.find_element_by_name('password')
password.send_keys('password')
time.sleep(1) 
subbut = driver.find_element_by_xpath("//input[@type='submit']")
subbut.click()

time.sleep(4)
subbut = driver.find_elements_by_xpath('//span[@class="Navbut"]')
subbut[4].click()

time.sleep(3)

driver.find_element_by_xpath('//a[@class="navbarLinks"]').click()
time.sleep(2)
driver.find_element_by_xpath('//input[@value="Privilege Leave"]').click()
time.sleep(1)
driver.find_element_by_xpath('//input[@placeholder="From"]').send_keys("February 26, 2020")
time.sleep(1)
driver.find_element_by_xpath('//input[@placeholder="To"]').send_keys("March 8, 2020")
time.sleep(1)
driver.find_element_by_xpath('//textarea[@id="reason"]').send_keys("I want to go for a vacation")
time.sleep(1)
driver.find_element_by_xpath('//button[@class="btn btn-dark"]').click()


obj=driver.switch_to.alert
print(obj.text)
obj.accept()
time.sleep(3)
driver.find_element_by_xpath('//a[@class="navbarLinks"]').click()
time.sleep(2)

all_options = driver.find_elements_by_tag_name("tr")
flag=0
for i in all_options:
    if "Privilege Leave 2020-02-26 2020-03-08 I want to go for a vacation Delete" in str(i.text):
        flag=1

if flag == 1:
    print("Entry is updated")
print('Test Case Finished')
driver.quit()