import type { RNStyleProperty } from '../typings';

const transformProperty = <T extends { [key: string]: any }>(
  obj: T,
  property: keyof T
) => {
  const value = obj[property];

  const styleProperty = (
    typeof value === 'boolean' ? property : value
  ) as RNStyleProperty;
  return { property, styleProperty };
};

const getKeys = <T extends { [key: string]: any }>(object: T) =>
  Object.keys(object) as (keyof T)[];

const getValues = <T extends { [key: string]: any }>(object: T) =>
  Object.values(object) as T[keyof T][];

export { transformProperty, getKeys, getValues };
