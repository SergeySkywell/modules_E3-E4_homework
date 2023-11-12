// Элетрический прибор, родительская функция
function ElectricalAppliance(power) {
    this.power = power;
    this.connected = false;
}

// Включение в розетку
ElectricalAppliance.prototype.plugin = function() {
    this.connected = true;
    console.log(`Включён в розетку. Потребляемая мощность: ${this.power} Вт`);
};

// Выключение из розетки
ElectricalAppliance.prototype.unplug = function() {
    this.connected = false;
    console.log(`Выключен из розетки`);
};

// Наследование и расширение для лампы
function DeskLamp(brightness) {
    ElectricalAppliance.call(this, 10); // Мощность лампы
    this.brightness = brightness; // Яркость
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Наследование и расширение для компьютера
function Computer(memory) {
    ElectricalAppliance.call(this, 100); // Мощность компьютера
    this.memory = memory; // Память
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Создание экземпляров приборов
const deskLamp = new DeskLamp("Яркий");
const computer = new Computer(16);

// Пример использования
deskLamp.plugin();
computer.plugin();