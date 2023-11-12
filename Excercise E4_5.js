// Элетрический прибор, родительская функция
class ElectricalAppliance {
  constructor(power){
    this.power = power;
    this.connected = false;
  };
  
  // Включение в розетку
  plugin() {
    this.connected = true;
    console.log(`Включён в розетку. Потребляемая мощность: ${this.power} Вт`);
  };
    
  // Выключение из розетки
  unplug() {
    this.connected = false;
    console.log(`Выключен из розетки`);
  };
}

// Наследование и расширение для лампы
class DeskLamp extends ElectricalAppliance {
  constructor(brightness){
    super(10); // Мощность лампы
    this.brightness = brightness; // Яркость
  }
}

// Наследование и расширение для компьютера
class Computer extends ElectricalAppliance {
  constructor(memory){
    super(100); // Мощность компьютера
    this.memory = memory; // Память  
  }
}

// Создание экземпляров приборов
const deskLamp = new DeskLamp("Яркий");
const computer = new Computer(16);

// Пример использования
deskLamp.plugin();
computer.plugin();