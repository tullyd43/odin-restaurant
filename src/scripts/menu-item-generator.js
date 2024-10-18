const menu = (function createMenu() {
	const menuArr = [];
	class MenuItems {
		constructor(
			item,
			description,
			price,
			image,
            id = MenuItems.createID(),
		) {
			this.item = item;
			this.description = description;
			this.price = price;
			this.image = image;
			this.id = id;
		}
	}
	MenuItems.createID = function () {
		return (this.id = menuArr.length);
	};
	function toMenuArr() {
		return menuArr.push(this);
    }

    
    return {
        menuArr,
        MenuItems,
    }
})();

const item1 = new menu.MenuItems("Tacos", "loveley Mexican style street tacos", 12);

item1;

const item2 = new menu.MenuItems("Tacos", "loveley Mexican style street tacos", 12);

item2

// Contain within IIFE?
