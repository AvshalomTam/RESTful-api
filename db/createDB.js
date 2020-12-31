const orders = require('./CRUD');
const manot = require('./CRUDmana');

orders.createOrder(15, 'ori', '23.12.2020', '0545681258');
orders.createOrder(15, 'yonatan', '23.12.2020', '0508411111');
orders.createOrder(15, 'itzhak', '23.12.2020', '0555555555');
orders.createOrder(26, 'yogev', '23.12.2020', '0545682544558');
orders.createOrder(26, 'yonatan', '23.12.2020', '0508419999');
orders.createOrder(26, 'yaakov', '23.12.2020', '011111111');
orders.createOrder(26, 'shaul', '23.12.2020', '0808080880808');
orders.createOrder(157, 'yarden', '23.12.2020', '0545682544558');
orders.createOrder(157, 'dana', '23.12.2020', '0508419999');
orders.createOrder(157, 'rotem', '23.12.2020', '011111111');
orders.createOrder(157, 'miri', '23.12.2020', '0808080880808');
orders.createOrder(157, 'dalia', '23.12.2020', '0560211111');

manot.createMana('Pasta', 15, 3);
manot.createMana('Pizza', 26, 4);
manot.createMana('Lazania', 157, 5);
