CS624 PE05 Input Output Process 

**Input
Information is entered by the user on the device, which will be the country and it's currency. For example, AddCountry tab initiates this process. TextInput is the ReactNative function that provides this feature. Once the information is entered, it is saved in the addCountry function. There are additional entry screens for adding cities or countries, and tabs to see what cities or countries have already been added and are saved in memory. 

**Process
The information entered by the user such as country and currency are saved in the App.js function. New countries entered are added into the AddCountry array. The same happens if new cities are entered and they are saved in the AddCity array. Countries is the starting screen in this version of the app being created. If no countries have been entered, then a message is seen on the center screen stating no countries are saved. Keyboard.dismiss was used so the keyboard closes making it a better exprience for the user so they don't have to constantly tab outside the keypad, although that is not a significant thing for users to do if necessary. 

**Output
The countries entered are saved and displayed on the screen, listing each country and its currency. Once entered, the countries and currencies are shown on the screen. The tabs at the bottom of the screen allow users to enter new countries and currencies, or cities. A user can also see the countries listed that have been entered as long as the app is active.  Once deactivated, the county list is cleared. 

