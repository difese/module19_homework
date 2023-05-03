/* Задание 5 
Перепишите консольное приложение из предыдущего юнита на классы.
*/

console.log('----- Задание 5 -----');

class ElectricalAppliance {
  constructor(type, vendor, power) {
    this.voltage = '220V',
    this.type = type,
    this.vendor = vendor,
    this.power = power,
    this.switchOn = false
  }

  on() {
    this.switchOn = true;
    console.log(`Электроприбор ${this.type} ${this.vendor} включен.`);
  }

  off() {
    this.swithOn = false;
    console.log(`Электроприбор ${this.type} ${this.vendor} выключен.`);
  }

  powerConsumption() {
    if (this.switchOn) {
        return this.power;
      } else {
        return 0;
      }
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
