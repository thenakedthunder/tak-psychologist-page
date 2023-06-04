const isHexadecimal = (str: string) => /^[0-9a-fA-F]+$/.test(str);

const getColorWithOpacity = (color: string, opacity: string) => {
  if (color.length !== 7 || !color.startsWith('#') || !isHexadecimal(color.slice(1))) {
    throw new Error('color should be given as a hex value, starting with the "#" character!');
  }

  if (opacity.length !== 2 || Number.isNaN(Number(opacity))) {
    throw new Error('opacity should be given as a 2-digit number, without the "%" character!');
  }

  return color + opacity;
};

export default getColorWithOpacity;
