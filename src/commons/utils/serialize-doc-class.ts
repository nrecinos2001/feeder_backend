import { ClassConstructor, plainToInstance } from 'class-transformer';

export function serializeDocClass<T>(
  serializerClass: ClassConstructor<any>,
  data: any | any[],
): T {
  const serializedData = plainToInstance(serializerClass, data, {
    excludeExtraneousValues: true,
  });

  return serializedData as T;
}
