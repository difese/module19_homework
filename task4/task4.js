/* Задание 4
Реализуйте на прототипах следующее консольное приложение: 
определите иерархию электроприборов, 
включите некоторые в розетку, 
посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.
*/

console.log('----- Задание 4 -----');

function ElectricalAppliance(type, vendor, power) {
  this.voltage = '220V',
  this.type = type,
  this.vendor = vendor,
  this.power = power,
  this.switchOn = false
}


ElectricalAppliance.prototype.on = function() {
  this.switchOn = true;
  console.log(`Электроприбор ${this.type} ${this.vendor} включен.`);
}

ElectricalAppliance.prototype.off = function() {
  this.swithOn = false;
  console.log(`Электроприбор ${this.type} ${this.vendor} выключен.`);
}

ElectricalAppliance.prototype.powerConsumption = function() {
  if (this.switchOn) {
    return this.power;
  } else {
    return 0;
  }
}

const kitchenKettle = new ElectricalAppliance('чайник', 'Panasonic', 1850);
const vacuumCleaner = new ElectricalAppliance('пылесос', 'Thomas', 1700);
const airConditioner = new ElectricalAppliance ('кондиционер', 'Daikin', 970);

kitchenKettle.on();
vacuumCleaner.off();
airConditioner.on();

console.log(`Суммарная потребляемая мощность включённых электроприборов: ${kitchenKettle.powerConsumption() + vacuumCleaner.powerConsumption() + airConditioner.powerConsumption()} Вт.`);

console.log('---------------------');