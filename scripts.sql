use segundoparcial;

select * from employees;
select * from products;
describe products;
describe employees;


SELECT categoryCode, AVG(value) AS valor_promedio
FROM products
GROUP BY categoryCode;

SELECT brandCode, COUNT(*) AS Cantidad_Productos
FROM products
GROUP BY brandCode;


 
ALTER TABLE products CHANGE `category.code` categoryCode VARCHAR(255);
ALTER TABLE products CHANGE `brand.code` brandCode VARCHAR(255);
ALTER TABLE products CHANGE `family.code` familyCode VARCHAR(255);
ALTER TABLE products CHANGE `line.code` lineCode VARCHAR(255);
ALTER TABLE products CHANGE `productSegment.code` productSegmentCode VARCHAR(255);