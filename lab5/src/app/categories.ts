
export interface Category {
  id: number;
  name: string;
}
export const categories = [
  {
    id: 1,
    name: 'Phones'
  },
  {
    id: 2,
    name: 'Cheese'
  },
  {
    id: 3,
    name: 'Flowers'
  },
  {
    id: 4,
    name: 'Ropes'
  }
]

export let chosen_c = 0;
export function set_cat(cat: number)
{
  chosen_c = cat;
}
export function get_cat()
{
  return chosen_c;
}
