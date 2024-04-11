import { Person, User, Admin } from "./exercise";

type UserBasicInfo = Omit<User, 'type'>;
type AdminBasicInfo = Omit<User, "type">;

const getObjectKeys = <T extends Record<string, any>>(obj: T) => Object.keys(obj) as (keyof T)[];

export function filterPersonsExtend(persons: Person[], personType: User['type'], criteria: Partial<UserBasicInfo>) : User[];
export function filterPersonsExtend(persons: Person[], personType: Admin['type'], criteria: Partial<AdminBasicInfo>) : Admin[];
export function filterPersonsExtend(persons: Person[], personType: Person['type'], criteria: Partial<Person>) : Person[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      let criteriaKeys = getObjectKeys(person);
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
};