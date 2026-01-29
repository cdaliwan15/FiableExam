import { Directions } from "./enum";
import { Coordinates } from "./types";

export const inputValidation = (input: string): Coordinates | string => {
  const match = input.match(/^(-?\d+)\s*,\s*(-?\d+)\s+(.+)$/);

  if (!match) return "Coordinates or Direction does not exists. Please check"

  const [,xCoordinate, yCoordinate, directional] = match;
  const xValue = Number(xCoordinate);
  const yValue = Number(yCoordinate);
  const direction = directional.toUpperCase();
  if((xValue < 0 || xValue > 4) || (yValue < 0 || yValue > 4) || !isValidDirection(direction)){
    return "Coordinates or Direction does not exists. Please check"
  } 
  
  return { x: Number(xValue), y: Number(yValue), direction: direction as Directions };
};

const isValidDirection = (value: string): boolean => {
  return Object.values(Directions).includes(value as Directions);
}