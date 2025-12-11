type Dextop = {
  gpu: string;
  ram: number;
  processor: string;
  monitor: string;
};

type Laptop = {
  gpu: string;
  ram: number;
  processor: string;
};

type DextopAndLaptop = Dextop & Laptop;

const Lianli: DextopAndLaptop = {
  gpu: "RTX 4070 TI SUPER",
  ram: 32,
  processor: "7800x3D",
  monitor: "Samsung",
};

console.log(
  `GPU: ${Lianli.gpu} RAM: ${Lianli.ram} Processor: ${Lianli.processor} Monitor: ${Lianli.monitor}`
);
